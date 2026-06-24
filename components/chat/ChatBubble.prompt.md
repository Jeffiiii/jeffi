**ChatBubble** — a single message in the Elysia chat. Elysia's replies sit left (soft pink), the viewer's right (brand gradient).

```jsx
<ChatBubble from="elysia" name="Elysia ♪" time="just now">Welcome, dear ♪</ChatBubble>
<ChatBubble from="user">hi elysia!</ChatBubble>
<ChatBubble from="elysia" typing />
```

`typing` renders the animated three-dot indicator. `name` / `time` are optional meta.
