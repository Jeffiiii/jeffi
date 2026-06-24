# HANDOFF — Jeffi × Elysia Website & Design System

> Handoff doc for **Claude Cowork / Claude Code** (and Jeffi). This explains what
> exists, how it fits together, what's real vs mocked, and where to pick up.

## What this project is

Two things in one repo:

1. **A design system** ("Elysia × Jeffi") — tokens, fonts, reusable React components,
   and specimen cards. Compiled into `_ds_bundle.js` (a UMD bundle exposing
   `window.ElysiaJeffiDesignSystem_f13e8e`).
2. **A personal website** for Jeffi that consumes that design system — a dark, editorial,
   teal-accented hub with an embedded AI VTuber, **Elysia** (her surfaces are pink).

The live site entry is **`ui_kits/personal-site/index.html`** (root `index.html` redirects to it).

## Tech approach (important)

- **No build step / no framework install.** Pages load **React 18 + ReactDOM + Babel
  Standalone from CDN**, then load the design-system bundle and a set of **`.jsx` files
  transpiled in the browser** via `<script type="text/babel" src="…">`.
- Styling is **CSS custom properties** in `styles.css` → `tokens/*.css` (colors, type,
  spacing, effects, fonts). Components read those tokens.
- Fonts: **Bricolage Grotesque** (display), **Zen Kaku Gothic New** (bilingual body),
  **DM Mono** (labels) — via Google Fonts.
- It runs on **any static host** (no server code). A couple of features fetch files at
  runtime (Live2D model), so they need to be *served over http(s)*, not opened as `file://`.

## Repo map (what matters for the site)

```
index.html                         ← root redirect → the homepage
styles.css                         ← global entry; @imports tokens/*
tokens/                            ← colors, typography, spacing, effects, fonts, base
_ds_bundle.js                      ← compiled component library (window.ElysiaJeffiDesignSystem_f13e8e)
assets/live2d/                     ← Elysia's real Cubism 4 model (changli.*) + icon.png + exp/
assets/elysia-avatar.html          ← lightweight SVG avatar (legacy fallback art)

ui_kits/personal-site/             ← THE WEBSITE
  index.html                       ← homepage (modular version — the live one)
  home-editorial.html              ← alternate "editorial" concept (kept for reference)
  home-modular.html                ← backup copy of the modular base
  SiteNav.jsx SiteHero.jsx StatusStrip.jsx
  AboutProjects.jsx                ← About + the Work/Projects section (masonry + inline .execute() loader)
  GamesPlay.jsx                    ← "What I Play" section (renders PlayedDevices) + songs + goals
  PlayedDevices.jsx                ← the DESK SCENE (monitor + phone + book; click to zoom; icon → detail)
  MusicPlayer.jsx                  ← MusicSection + MiniPlayer (now-playing bar)
  AnimeFaves.jsx Sections.jsx (Gallery, Skills) EditorialHead.jsx Icons.jsx
  ElysiaDock.jsx                   ← floating Elysia chat launcher (compact)
  RiftPortal.jsx                   ← the pink "rift" on the right edge → navigates to Elysia's page
  MiniChat.jsx                     ← (editorial concept) floating chat-only dock
  judgement-cursor.js              ← maimai-style click judgement + BEAT ENGINE (window.maiBeat)
  audio-beat.js                    ← Web-Audio rhythm track that drives maiBeat (window.songBeat)

ui_kits/elysia-chat/               ← ELYSIA'S PAGE (the rift opens into this)
  index.html                       ← her night-realm page (stars, nebula, moon, drifting petals; living sky by time)
  ElysiaChatFull.jsx               ← avatar window + text/voice chat UI
  ElysiaBrain.jsx                  ← canned bilingual responder + emotion detection (mocked LLM)

components/ cards/ guidelines/     ← the design-system sources & specimen cards (not needed to run the site,
                                     but they're what _ds_bundle.js is compiled from)
```

## Signature features (and how they work)

- **The Rift portal** (`RiftPortal.jsx` + CSS in personal-site `index.html`): a glowing
  faceted crystal fissure on the right edge that leaks crystals/petals; click → a circular
  pink reveal expands and navigates to `ui_kits/elysia-chat/index.html`, where a matching
  curtain recedes (continuity via a `sessionStorage` flag). Pink is intentional — it's
  Elysia's domain bleeding into Jeffi's teal site.
- **maimai judgement cursor** (`judgement-cursor.js`): clicks spawn note-rings + a ranked
  judgement. A **beat engine** (`window.maiBeat`) ranks by timing accuracy
  (CRITICAL/PERFECT/GREAT/GOOD/MISS) when a beat is active; the pointer's follower ring
  pulses on-beat.
- **Real-ish audio + beat sync** (`audio-beat.js`, `window.songBeat`): the now-playing bar
  plays a synthesized rhythm track at each track's BPM and drives `maiBeat` in lockstep
  (`maiBeat.start(bpm)` + `sync()` on the downbeat). **To use real songs:** replace the
  Web-Audio metronome with an `<audio>` element and keep calling `songBeat.play(bpm)` on
  the downbeat (each TRACK already has a `bpm`).
- **Played = a desk scene** (`PlayedDevices.jsx`): a monitor, a phone on a stand, and a
  book on a bookstand share one desk. Click a device → the camera zooms in (2.6×); the
  focused device's game icons become clickable → detail card. The book holds games that
  aren't PC/mobile (arcade/sandbox/MMO). **Built to extend** — add desk props (keyboard,
  mug, figures) around the items.
- **Elysia's page**: her post-ultimate **night realm** (deep indigo→violet, stars, nebula,
  moon, drifting sakura+crystals). The **sky shifts with the visitor's local time**
  (night/dawn/day/dusk); she **greets by time of day**; the realm **pulses while she
  speaks**. The avatar uses her real **Live2D (Cubism 4)** model with cursor/idle
  head-eye tracking, lip-sync, blink, and emotion→expression.
- **Bilingual** EN / 中文 and **light/dark** theme toggles throughout.

## What's REAL vs MOCKED

- **Real:** all layout/visuals/interactions; the Live2D model + tracking + expressions;
  the beat engine + synthesized rhythm audio; theme + language; the rift transition.
- **Mocked:** Elysia's replies are **canned** (`ElysiaBrain.jsx` / `MiniChat.jsx`) — not a
  live LLM. TTS/STT are visual states, not real audio I/O. The music tracks are synthesized
  beats, not the actual songs. Gallery uses `picsum` placeholder images.

## Good first tasks to pick up (suggested)

1. **Real songs:** swap the metronome for `<audio>` files + correct BPMs; keep `maiBeat` synced.
2. **Real photos** in the Gallery (`Sections.jsx`).
3. **Wire a real LLM** for Elysia (replace `ElysiaBrain.jsx` responder; stream into the chat;
   keep the emotion→expression mapping that already drives the model).
4. **Desk props** in `PlayedDevices.jsx` to make it actually Jeffi's desk.
5. Decide **modular vs editorial** homepage (both exist) and delete the unused one.

## Caveats

- The **Live2D model** is the *Changli* example rig from the ai-vtuber repo and carries an
  author notice ("not for livestream monetization"). Replace with Elysia's own
  licensed/commissioned model before any monetized/public-stream use.
- Anime/gacha characters are emoji-free placeholders by initial — they're others' IP.
- Fonts/React/Babel load from CDNs; for production you may self-host them.
