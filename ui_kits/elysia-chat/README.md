# Elysia Chat — UI Kit

The interactive **Elysia chat experience** embedded into the site: a Live2D-style avatar
window, text + voice chat, emotion-driven reactions, and TTS/STT controls — the integration
the user asked for. Recreates the behaviour of `ai-vtuber/` (`github.com/Jeffiiii/ai-vtuber`)
in the browser, **mocked** (no real LLM/voice).

## Files
- `ElysiaBrain.jsx` — canned **bilingual** responses + `detectEmotion` (drawn from
  `persona/elysia.json` and `aivtuber/emotion.py`), plus `ElysiaChatPanel`, a compact
  reusable panel (also used by the personal site's dock).
- `ElysiaChatFull.jsx` — the full side-by-side layout: avatar stage + persona/settings card
  on the left, chat thread + suggestion chips + composer on the right. Speaking drives a
  voice-meter and the avatar's lip-flap; replies set the emotion expression.
- `index.html` — mounts the full experience.

## What's real vs mocked
- **Real (visual):** avatar (ported from `aivtuber/avatar/web/face.html`), emotion set,
  bilingual switching, speaking/typing states, TTS/STT toggles.
- **Mocked:** LLM replies (canned), actual audio playback, real Live2D rig & VTube Studio.
  In production these wire to the Stage 2/3 pipeline (XTTS-v2, STT, Live2D).
