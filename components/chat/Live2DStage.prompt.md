**Live2DStage** — renders Elysia's real Cubism 4 Live2D model (the Changli example rig from `ai-vtuber/ExampleLive2DModel`) in the dark stream window, with auto blink/breathing, lip-sync, and emotion→expression mapping. Lazy-loads the Cubism runtime from CDN; falls back to the lightweight SVG `AvatarStage` if WebGL/load fails.

```jsx
<Live2DStage modelUrl="../../assets/live2d/changli.model3.json"
             emotion="playful" speaking live height={360} />
```

`emotion` maps onto the model's button expressions (heart-eyes / blush / angry / eye-roll). `speaking` drives `ParamMouthOpenY`. Tune framing with `zoom` / `yOffset`. This is the production-grade avatar window; use `AvatarStage` only for the lightweight SVG stand-in.
