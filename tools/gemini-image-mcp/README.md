# Gemini image MCP server

A tiny, zero-dependency MCP server that generates images with Google's Gemini
image model ("Nano Banana") and saves them as PNGs into the project's `static/`
folder. Registered for this project in [`.mcp.json`](../../.mcp.json).

## Setup

1. Get a Gemini API key from Google AI Studio: https://aistudio.google.com/apikey
2. Copy `.env.example` to `.env` in this folder and paste the key:
   ```
   GEMINI_API_KEY=your-key-here
   ```
   (`.env` is gitignored — the key is never committed.)
3. Restart Claude Code and approve the `gemini-image` MCP server when prompted.

## Tool

`generate_image({ prompt, filename? })` → saves a PNG to `static/` and returns
the path.

## Notes

- Billed via the Gemini API (separate from any Google AI Pro/Ultra subscription).
- Model is configurable via `GEMINI_IMAGE_MODEL`; output dir via `IMAGE_OUTPUT_DIR`.
- Runs on plain Node (uses only built-ins + global `fetch`).
