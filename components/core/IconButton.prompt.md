**IconButton** — circular icon-only control for chrome (play / send / mic / close / toggles); pops on hover, shrinks on press.

```jsx
<IconButton variant="solid" label="Play">▶</IconButton>
<IconButton variant="dark" label="Mic" active>🎙️</IconButton>
```

Variants: `solid` (brand glow), `glass`, `ghost`, `dark` (for plum overlays). Sizes `sm`/`md`/`lg`. Use `active` for toggle state. Accepts emoji, Unicode, or Lucide svg children.
