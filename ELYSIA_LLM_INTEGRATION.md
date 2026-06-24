# Wiring the website's Elysia to the real fine-tuned model

The chat on **`ui_kits/elysia-chat/`** (and the dock on the homepage) now talks to your
fine-tuned Elysia when the model server is reachable, and falls back to the canned
"demo" replies when it isn't — so the site never breaks if the server is off.

The badge under the composer shows which mode you're in:

- 🟢 **`elysia-merged`** — connected to the real model (replies are generated live)
- ⚪ **demo mode / 演示模式** — server not reachable, using canned lines
- `connecting…` — probing on page load

## How it works

`ElysiaBrain.jsx` now contains:

- `ELYSIA_SYSTEM` — Elysia's persona prompt (mirrors `ai-vtuber/persona/elysia.json`).
- `elysiaGenerate(history, userText)` — POSTs `{messages, temperature, max_tokens}` to
  `serve_elysia.py`'s `/generate` and returns the cleaned reply.
- `elysiaHealth()` — pings `/health` for the live/demo badge.
- The reply is run through the existing `detectEmotion()`, which drives the **Live2D
  expression** exactly as before. The reply is revealed with a typewriter effect.

The model server (`ai-vtuber/serve_elysia.py`) now sends **CORS headers** so the browser
page is allowed to call it.

## Run it (local testing)

1. **Start the model server** (WSL, in your `.venv-train`):

   ```bash
   python serve_elysia.py --model ~/ai-vtuber/output/elysia-merged
   # serves http://127.0.0.1:8000  (Windows reaches it at the same localhost)
   ```

2. **Serve the website over http** (not `file://` — the Live2D model is fetched at runtime).
   From the `jeffi/` repo root, any static server works, e.g.:

   ```bash
   python -m http.server 5500
   ```

3. Open `http://localhost:5500/ui_kits/elysia-chat/` (or the homepage and click the rift).
   The badge should turn green and Elysia will reply with the real fine-tuned brain.

## Pointing at a different endpoint

By default the page calls `http://127.0.0.1:8000`. To override (e.g. a LAN IP or a
tunnel), set a global **before** `ElysiaBrain.jsx` loads, in the page's `<head>`:

```html
<script>window.ELYSIA_LLM_URL = "http://192.168.1.50:8000";</script>
```

## Notes / caveats

- **Same scheme required.** If you serve the site over **https**, the browser will block
  calls to an **http** model server (mixed content). For local testing keep the site on
  http, or put the model server behind https too.
- **Voice (TTS/STT)** in the website are still visual-only states; real audio runs in the
  desktop orchestrator (`ai-vtuber`). Browser TTS could be added later via the Web Speech
  API if you want the page itself to speak.
- The Live2D rig is still the *Changli* example model ("not for livestream monetization") —
  swap for Elysia's own licensed model before any monetized public stream.
