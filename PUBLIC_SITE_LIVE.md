# Making the public GitHub Pages site use the real voice + brain

Your public site (`https://<you>.github.io/...`) is HTTPS and lives on GitHub's
servers, so it can't talk to `http://127.0.0.1` on your PC (mixed content). To make
it use the **real GSVI voice + fine-tuned brain**, expose your two local servers over
an **HTTPS tunnel**, then point the page at those tunnel URLs.

The page already knows how to read them — no code edits, no re-deploy needed.

## 1. Install cloudflared (one time)

```powershell
winget install Cloudflare.cloudflared
```
(ngrok works too; cloudflared's quick tunnels are free and need no account.)

## 2. Start your stack as usual

LLM brain on `:8000` (WSL), GSVI on `:8002`, and `serve_tts.py` on `:8020` — see
`ai-vtuber/LAUNCH.md`.

## 3. Open two tunnels (two new terminals)

```powershell
cloudflared tunnel --url http://localhost:8000     # -> your BRAIN (serve_elysia)
cloudflared tunnel --url http://localhost:8020     # -> your VOICE (serve_tts)
```
Each prints an https URL like `https://random-words.trycloudflare.com`. Note both —
the first is the **LLM** URL, the second is the **TTS** URL.

> CORS is already handled: both servers send `Access-Control-Allow-Origin: *`, so the
> github.io page is allowed to call them through the tunnel.

## 4. Point the public page at them

Open your public chat page with the URLs as query params (it saves them, so future
visits remember):

```
https://<you>.github.io/ui_kits/elysia-chat/?llm=https://BRAIN.trycloudflare.com&tts=https://VOICE.trycloudflare.com
```

That's it — badge turns green (`elysia-merged`) and `Elysia (GSVI · local)`, and she
replies with the real brain + voice. To clear it later, run in the browser console:
`localStorage.removeItem('elysia_llm_url'); localStorage.removeItem('elysia_tts_url')`.

## Notes & safety

- **Quick-tunnel URLs change every restart.** For stable URLs, set up a *named*
  cloudflared tunnel (needs a free Cloudflare account + a domain), then the link
  never changes. For occasional streams, quick tunnels are fine — just re-share the
  `?llm=&tts=` link with the new URLs.
- **This exposes your GPU servers to anyone with the link** while the tunnels run.
  Only start them when you're streaming, and stop them after. Don't post the raw
  tunnel URLs publicly. For a real public launch you'd host the model on a server,
  not your laptop.
- The page **degrades gracefully**: if the tunnels are down, it falls back to the
  browser voice + canned replies, so the public site never looks broken.
