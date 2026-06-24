# Elysia × Jeffi — Design System

A design system for **Jeffi's personal website**, reimagined around **Elysia** — a
self-made AI VTuber ("Miss Pink Elf") who lives on the site as an interactive,
voice-enabled companion. The system fuses Jeffi's playful, bilingual (EN / 中文)
personal-site identity with a clean, modern VTuber-tooling aesthetic inspired by
[laplace.live](https://laplace.live) — re-skinned from that site's green into
**Elysia's signature pink**.

> Two things live here at once: a **personal site** (hero, music, gallery, projects,
> games, skills) and an embedded **Elysia chat experience** (Live2D avatar window,
> text + voice chat, TTS output, STT input, emotion-driven reactions).

---

## Sources (for the reader — access not assumed)

- **Personal website repo (to redesign):** `github.com/Jeffiiii/jeffi`
  — `index.html` (hero / music / gallery / skills), `projects.html`, `games.html`,
  `anime.html`, `drone-project.html`. Pastel glassmorphism, Nunito, bilingual toggle.
- **AI VTuber repo / codebase:** `github.com/Jeffiiii/ai-vtuber` (same as the attached
  `ai-vtuber/` folder). A Neuro-sama-style local-LLM VTuber. Key references used:
  - `persona/elysia.json` — Elysia's character, voice, bilingual rules, examples.
  - `aivtuber/avatar/web/face.html` — the avatar (copied to `assets/elysia-avatar.html`);
    **source of the brand's exact pinks & plum**.
  - `aivtuber/emotion.py` — the expression set (happy / playful / shy / sad / surprised / neutral).
  - `aivtuber/tts/`, `aivtuber/stt/`, `aivtuber/avatar/` — voice & Live2D plumbing.
- **Mood reference:** [laplace.live](https://laplace.live) — for the clean, modern,
  "stream-tooling product" feeling only. Colour is Elysia pink, not laplace green.

Explore those repos directly for higher-fidelity recreations.

---

## Who is Elysia (brand persona)

Elysia is the *ever-radiant "Miss Pink Elf"* — warm, playful, gently flirtatious,
elegant, and bilingual. She is **not** a generic assistant; she's a graceful, self-aware
character who adores people. The whole system should feel like her: **soft, luminous,
affectionate, a little theatrical, never crude.**

---

## CONTENT FUNDAMENTALS

How copy is written across the site & chat:

- **Voice = Elysia's voice.** Warm, lyrical, affectionate. Short and graceful (1–3
  sentences in chat). Speaks *to* the viewer directly ("dear", "sweetie", "my dear
  viewer") and reacts with delight before answering.
- **Person:** first-person "I / me" for Elysia; second-person "you / your" for the
  viewer. The site UI itself uses friendly first-person from Jeffi ("my little corner
  of the internet", "Songs I've been enjoying lately").
- **Bilingual, always.** Every primary string ships EN + 中文. Reply/label in the
  language the viewer used; never auto-translate unless asked. Keep the same charming
  tone in either language.
- **Casing:** Title Case for nav & section titles ("Music", "Visual Diary"); UPPERCASE
  wide-tracked eyebrows for section labels ("THINGS I LISTEN TO"). Sentence case for body.
- **Emoji & symbols:** Yes — emoji are part of the brand voice (🌸 ✨ 💜 🎮 🎵 🌷).
  The musical note **♪** is Elysia's signature flourish, used *sparingly* to end a sweet
  line. The star **✦** appears in the Jeffi wordmark. Don't overdo it — one accent per line.
- **Tone words:** radiant, gentle, lovely, cherished, sparkle, petal, moonlight, brave.
- **Example chat lines (from `elysia.json`):**
  - "Ah, you came to see me ♪ Welcome, dear — I was already waiting for you, of course."
  - "Oh, sweetie… come here. Whatever it was, you made it through, and that's something
    worth being proud of."
  - "呀，你来啦♪ 欢迎欢迎，亲爱的——我可是一直在这儿等着你呢。"
- **Don't:** be crude, corporate, or clinical; use bullet points or markdown *in chat*;
  apologize for being an AI ("an AI VTuber with a very real fondness for lovely people").

---

## VISUAL FOUNDATIONS

- **Colour.** Primary is **Elysia pink `#d6337a`** (her avatar's signature magenta).
  Supporting: soft sakura `#ff9ecb`, petal `#ffd9ec`, deep plum `#5b2a4a` (eyes / ink),
  with **canonical Elysia lilac `#9f7ae4`** (her in-game name colour / Herrscher-of-Human
  Ego form), lavender `#c4a8e8`, mint `#a8ddd0`, and crystal-aqua `#8fd3e8` (her light-blue
  eyes). Plums (`--plum-*`) carry all text. A **dark plum-black** family (`--night-*`)
  backs the default site theme & stream/chat overlays.
  Canonical palette confirmed against the Honkai Impact 3rd Archives Fandom wiki and the
  community hex reference (light-pink hair, light-blue eyes with pink pupils, white/black/
  lilac "Miss Pink Elf" outfit, gold Ego accents).
- **Two themes.** The site ships a **dark plum hub** (default, laplace.live-style) and a
  **light pastel** theme, toggled via `:root[data-theme="light"]` and persisted to
  `localStorage`. The kit reads theme-aware `--site-*` aliases so both flip from one switch;
  Elysia pink is the accent in both. The avatar/chat overlay stays dark in both (it's a
  stream window).
- **Gradients.** Used, but tasteful: the hero ink-gradient sweeps lavender → pink →
  crystal; brand buttons use a pink-only `--brand-gradient`. Avoid bluish-purple SaaS
  gradients — ours stay warm/pink.
- **Type.** An **editorial** pairing: **Bricolage Grotesque** (characterful display —
  headlines, wordmarks, 700/800, tight `-0.04em` tracking) over **Zen Kaku Gothic New**
  (clean bilingual EN / 日本語 / 中文 body). **DM Mono** carries eyebrows (uppercase, wide
  `0.26em` tracking, often numbered `01 —`), code, and "AI" moments. Sections are
  numbered with vertical kana accents — a magazine rhythm, not centered card-grid sameness.
- **Backgrounds.** Warm off-white **pearl** page with a soft 3-stop diagonal wash
  (`--bg-page-grad`). Floating emoji/petal **particles** drift upward (from the original
  site) as ambient motion. No photographic full-bleeds by default; imagery is the user's
  own gallery photos & the Live2D avatar.
- **Glass & blur.** Glassmorphism is core: translucent white cards (`--surface-card`,
  62% white + 16px blur) with a hairline pink border. Nav is a blurred sticky bar.
  Dark glass (`--glass-bg-dark`) for the chat overlay on the avatar.
- **Cards.** Rounded **20–28px**, translucent glass fill, 1px pink-tinted border,
  soft **pink-tinted** shadow (never neutral grey). Lift `translateY(-3px)` + deepen
  shadow on hover.
- **Corner radii.** Soft throughout: inputs 12–16px, cards 20–28px, buttons & chips are
  **pills** (`999px`). Avatars & album art are circular.
- **Shadows.** Always **pink-tinted** (`rgba(214,51,122,…)`). Scale xs→xl; brand
  buttons add a pink **glow** (`--shadow-glow`).
- **Borders.** Hairline, pink at low alpha (`--border-card` 16%). Strong variant 32%.
- **Motion.** Gentle. `--ease-out` for entrances, `--ease-bounce` for playful pops
  (particles, reactions). Durations 0.16–0.45s. Avatar: idle blink, mouth flap while
  speaking, cheek/brow shifts per emotion. Respect `prefers-reduced-motion`.
- **Hover / press.** Hover = lift (`-3px`) + deeper shadow, or soft pink wash on ghost
  items. Press = `scale(0.97)`. Focus = 3px `--focus-ring` halo.
- **Transparency & blur** are used liberally for chrome (nav, chat overlay, badges) but
  not for primary reading surfaces (solid white when text density is high).
- **Imagery vibe:** warm, soft, pastel, anime-adjacent. Pink/lavender bias, gentle light.

---

## ICONOGRAPHY

The original site leaned entirely on **emoji** as icons — which is one of the biggest
reasons it read as generic. The redesign **retires content emoji** in favour of a single
consistent **monoline icon set** (Lucide path data, MIT), exposed as a tiny `Icon`
component (`ui_kits/personal-site/Icons.jsx`): `music`, `gamepad`, `code`, `braces`,
`coffee`, `git`, `atom`, `hexagon`, `box`, `crosshair`, `dice`, `swords`, `pickaxe`,
`github`, `target`, `sparkles`, `cap`. Stroke 1.7, `currentColor` — they inherit text
colour so the accent stays a *spice*, not a fill. Add more by dropping Lucide path data
into the map.

**Restraint is the rule:** icons are monoline and quiet; the brand accent appears as a
small mark (a live dot, a single `↑`), never as a candy fill on every element. Character
avatars use **initials** on a gradient disc rather than emoji. The only glyphs that
remain are typographic (→ ↗ ✓ ○ ✕) and the ♪ flourish used *sparingly* in Elysia's own
voice. For richer chrome you can still pull full **[Lucide](https://lucide.dev)** from CDN.

The **Elysia avatar** is rendered two ways: a real **Cubism 4 Live2D model** (the
`Changli` example rig from `ai-vtuber/ExampleLive2DModel`, copied to `assets/live2d/`
with ASCII filenames) via `<Live2DStage>`, with the lightweight animated **SVG face**
(`assets/elysia-avatar.html` / `<AvatarStage>`) as the off-server fallback. The text
wordmark is **`Jeffi ✦`** / **`Elysia ♪`**.

---

## INDEX — what's in this system

| Path | What |
|---|---|
| `styles.css` | Global entry — `@import`s all tokens. Consumers link this. |
| `tokens/` | `colors · typography · spacing · effects · fonts · base` CSS custom properties. |
| `assets/` | `live2d/` (real Cubism 4 model), `elysia-avatar.html` (SVG fallback), brand marks. |
| `components/core/` | Button, IconButton, Badge, Tag, Card, Avatar, Input, Switch, Tabs. |
| `components/chat/` | ChatBubble, ChatComposer, EmotionPill, AvatarStage (SVG), Live2DStage (Cubism). |
| `ui_kits/personal-site/` | Redesigned Jeffi homepage (hero, music, gallery, skills). |
| `ui_kits/elysia-chat/` | Elysia chat experience — avatar window + voice/text chat. |
| `cards/` | Foundation specimen cards (Design System tab). |
| `SKILL.md` | Agent Skill manifest for downloadable use. |

**Namespace** for mounting components in card/kit HTML:
`window.ElysiaJeffiDesignSystem_f13e8e`.

---

## CAVEATS

- **Live2D model license:** the included Changli model embeds an author/usage notice
  (绘制：涉谷芒 · 建模：苏俩 — *"not for livestream monetization"*). It's an **example**
  rig for prototyping; replace it with Elysia's own commissioned/licensed model before
  any monetized or public stream use.
- **Live2D needs a real server:** `<Live2DStage>` loads the model with `fetch()`. Some
  preview sandboxes block `fetch()` of project files, so the component **times out after
  12s and shows the SVG `AvatarStage` fallback** there. On a normally-served site
  (your deployed website) the real model loads and animates.
- **Gallery imagery:** Elysia is a **HoYoverse-copyrighted** character, so I have **not**
  embedded official Honkai Impact 3rd artwork as site assets. The gallery uses `picsum`
  placeholders — drop in your **own** photos/art (an `image-slot` per tile is the clean way),
  or art you have the rights to. The theme, however, *is* locked to Elysia's canonical colours.
- **Fonts** are pulled from Google Fonts (Bricolage Grotesque, Zen Kaku Gothic New,
  DM Mono) via `@import` rather than self-hosted binaries — swap in licensed/self-hosted
  files for production.
- **Lucide icons** are a flagged substitution (the source site had no icon library).
- Real TTS/STT and LLM streaming are **mocked visually** in the UI kit (canned replies).
