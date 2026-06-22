#!/usr/bin/env node
/**
 * Minimal, zero-dependency MCP server exposing Google Gemini image generation
 * ("Nano Banana") as a `generate_image` tool. Generated PNGs are written into
 * the project's static/ folder so they can be used by the site immediately.
 *
 * Transport: stdio, newline-delimited JSON-RPC 2.0 (MCP).
 * Key: read from GEMINI_API_KEY env, or from a local `.env` beside this file.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));

function loadKey() {
	if (process.env.GEMINI_API_KEY) return process.env.GEMINI_API_KEY.trim();
	const envPath = join(here, '.env');
	if (existsSync(envPath)) {
		const m = readFileSync(envPath, 'utf8').match(/^\s*GEMINI_API_KEY\s*=\s*(.+?)\s*$/m);
		if (m) return m[1].replace(/^["']|["']$/g, '').trim();
	}
	return null;
}

const MODEL = process.env.GEMINI_IMAGE_MODEL || 'gemini-2.5-flash-image';
const OUT_DIR = process.env.IMAGE_OUTPUT_DIR || join(process.cwd(), 'static');

const log = (...a) => process.stderr.write('[gemini-image-mcp] ' + a.join(' ') + '\n');
const send = (msg) => process.stdout.write(JSON.stringify(msg) + '\n');

function slug(s) {
	return (
		s
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/^-|-$/g, '')
			.slice(0, 48) || 'image'
	);
}

async function handle(msg) {
	const { method, params } = msg;

	if (method === 'initialize') {
		return {
			protocolVersion: '2024-11-05',
			capabilities: { tools: {} },
			serverInfo: { name: 'gemini-image', version: '0.1.0' }
		};
	}

	if (method === 'tools/list') {
		return {
			tools: [
				{
					name: 'generate_image',
					description:
						'Generate an image with Google Gemini (Nano Banana) and save it as a PNG in the project static/ folder. Returns the saved file path.',
					inputSchema: {
						type: 'object',
						properties: {
							prompt: { type: 'string', description: 'Text description of the image to generate.' },
							filename: {
								type: 'string',
								description: 'Output filename (.png). Optional; defaults to a slug of the prompt.'
							}
						},
						required: ['prompt']
					}
				}
			]
		};
	}

	if (method === 'tools/call') {
		const { name, arguments: args } = params || {};
		if (name !== 'generate_image') throw { code: -32601, message: `Unknown tool: ${name}` };

		const key = loadKey();
		if (!key)
			throw {
				code: -32000,
				message: 'GEMINI_API_KEY not set. Add it to tools/gemini-image-mcp/.env'
			};

		const prompt = String(args?.prompt || '').trim();
		if (!prompt) throw { code: -32602, message: 'prompt is required' };

		const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;
		const res = await fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key },
			body: JSON.stringify({
				contents: [{ parts: [{ text: prompt }] }],
				generationConfig: { responseModalities: ['IMAGE'] }
			})
		});

		if (!res.ok) {
			const t = await res.text();
			throw { code: -32000, message: `Gemini API ${res.status}: ${t.slice(0, 500)}` };
		}

		const data = await res.json();
		const parts = data?.candidates?.[0]?.content?.parts || [];
		const img = parts.find((p) => p.inlineData?.data);
		if (!img)
			throw {
				code: -32000,
				message: 'No image in response: ' + JSON.stringify(data).slice(0, 500)
			};

		const buf = Buffer.from(img.inlineData.data, 'base64');
		if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });
		let fname = args?.filename ? String(args.filename) : slug(prompt);
		if (!/\.png$/i.test(fname)) fname += '.png';
		const outPath = join(OUT_DIR, fname);
		writeFileSync(outPath, buf);

		return {
			content: [
				{ type: 'text', text: `Saved ${outPath} (${buf.length} bytes, model ${MODEL}).` }
			]
		};
	}

	throw { code: -32601, message: `Method not found: ${method}` };
}

let buffer = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', async (chunk) => {
	buffer += chunk;
	let idx;
	while ((idx = buffer.indexOf('\n')) >= 0) {
		const line = buffer.slice(0, idx).trim();
		buffer = buffer.slice(idx + 1);
		if (!line) continue;
		let msg;
		try {
			msg = JSON.parse(line);
		} catch {
			continue;
		}
		// Notifications (no id) get no response.
		if (msg.id === undefined || msg.id === null) continue;
		try {
			const result = await handle(msg);
			send({ jsonrpc: '2.0', id: msg.id, result });
		} catch (e) {
			const err = e && e.code ? e : { code: -32603, message: String(e?.message || e) };
			send({ jsonrpc: '2.0', id: msg.id, error: { code: err.code, message: err.message } });
		}
	}
});

log(`ready (model ${MODEL}, out ${OUT_DIR})`);
