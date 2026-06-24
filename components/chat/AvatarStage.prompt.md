**AvatarStage** — the dark window that frames Elysia's animated face, ported from the codebase avatar (`aivtuber/avatar/web/face.html`). Blinks, flaps the mouth while `speaking`, and shifts cheeks/brows/mouth colour per `emotion`.

```jsx
<AvatarStage emotion="playful" speaking live name="Elysia" height={340} />
```

In production this is where the real Live2D rig mounts; here it's the lightweight SVG stand-in. Pass overlay chips/controls as children.
