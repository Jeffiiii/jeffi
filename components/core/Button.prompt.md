**Button** — the primary action control; a sharp editorial button (solid fill, subtle shadow, small radius) with a 2px hover lift. Used for every call-to-action across the site and chat.

```jsx
<Button variant="primary">See Projects</Button>
<Button variant="secondary" size="sm">Games</Button>
<Button variant="ghost">Cancel</Button>
```

Variants: `primary` (solid brand), `secondary` (outline), `ghost` (text), `dark` (for plum surfaces / the chat overlay). Sizes: `sm` `md` `lg`. Pass `href` to render as a link, `icon` / `iconRight` for a node (prefer typographic arrows like → over emoji).
