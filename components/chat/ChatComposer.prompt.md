**ChatComposer** — the Elysia chat input row: text field, mic button (STT), and send button.

```jsx
<ChatComposer value={text} onChange={setText} onSend={send} onMic={toggleMic} listening={rec} />
```

`listening` shows the recording state (red mic + "Listening…"). Enter or the send button fires `onSend(message)`. `dark` (default) suits the plum chat overlay.
