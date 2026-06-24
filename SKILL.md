---
name: elysia-jeffi-design
description: Use this skill to generate well-branded interfaces and assets for Jeffi's personal website and the Elysia AI-VTuber chat experience, either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out
and create static HTML files for the user to view. If working on production code, you can
copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build
or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_
production code, depending on the need.

## Quick map
- `README.md` — full design guide: context, content & visual foundations, iconography, index.
- `styles.css` — link this one file; it `@import`s all tokens (`tokens/`).
- `tokens/` — colors, typography, spacing, effects, fonts. Brand primary is **Elysia pink
  `#d6337a`** on a warm pearl (light) or plum-black `--night-*` (dark) base.
- `components/core/` + `components/chat/` — React primitives (Button, Card, Tag, Badge,
  Avatar, Input, Switch, Tabs, IconButton; ChatBubble, ChatComposer, EmotionPill,
  AvatarStage). Mount via `window.ElysiaJeffiDesignSystem_f13e8e` after loading `_ds_bundle.js`.
- `ui_kits/personal-site/` — redesigned homepage (laplace-style, dark + Elysia pink).
- `ui_kits/elysia-chat/` — the Elysia avatar + voice/text chat experience.
- `assets/elysia-avatar.html` — the animated avatar (the primary brand mark).

## Voice
Warm, lyrical, affectionate, gently playful; bilingual EN / 中文; emoji + the ♪ flourish
used sparingly. See README "CONTENT FUNDAMENTALS".
