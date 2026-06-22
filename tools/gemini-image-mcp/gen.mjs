#!/usr/bin/env node
/**
 * CLI wrapper for one-off / batch image generation (same engine as the MCP
 * server). Usage:
 *   node gen.mjs "<prompt>" <filename.png> [outDir]
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));

function loadKey() {
	if (process.env.GEMINI_API_KEY) return process.env.GEMINI_API_KEY.trim();
	const p = join(here, '.env');
	if (existsSync(p)) {
		const m = readFileSync(p, 'utf8').match(/^\s*GEMINI_API_KEY\s*=\s*(.+?)\s*$/m);
		if (m) return m[1].replace(/^["']|["']$/g, '').trim();
	}
	return null;
}

const [, , prompt, filename = 'out.png', outDir = 'static/brand'] = process.argv;
if (!prompt) {
	console.error('Usage: node gen.mjs "<prompt>" <filename.png> [outDir]');
	process.exit(1);
}

const MODEL = process.env.GEMINI_IMAGE_MODEL || 'gemini-2.5-flash-image';
const key = loadKey();
if (!key) {
	console.error('No GEMINI_API_KEY (set tools/gemini-image-mcp/.env)');
	process.exit(1);
}

const res = await fetch(
	`https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
	{
		method: 'POST',
		headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key },
		body: JSON.stringify({
			contents: [{ parts: [{ text: prompt }] }],
			generationConfig: { responseModalities: ['IMAGE'] }
		})
	}
);

if (!res.ok) {
	console.error('API', res.status, (await res.text()).slice(0, 700));
	process.exit(1);
}

const data = await res.json();
const parts = data?.candidates?.[0]?.content?.parts || [];
const img = parts.find((p) => p.inlineData?.data);
if (!img) {
	console.error('No image in response:', JSON.stringify(data).slice(0, 700));
	process.exit(1);
}

const buf = Buffer.from(img.inlineData.data, 'base64');
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, filename);
writeFileSync(outPath, buf);
console.log('saved', outPath, buf.length, 'bytes; model', MODEL);
