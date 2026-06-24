import React from 'react';
import { IconButton } from '../core/IconButton.jsx';

/**
 * ChatComposer — the message input row for Elysia chat: text field, mic (STT),
 * and send. `listening` shows the recording state; `dark` for plum overlays.
 */
export function ChatComposer({ value = '', onChange, onSend, onMic, listening = false, dark = true, placeholder = 'Say something to Elysia…', style = {} }) {
  const submit = () => { if (value.trim() && onSend) onSend(value.trim()); };
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '8px',
      padding: '8px 8px 8px 16px', borderRadius: 'var(--radius-pill)',
      background: dark ? 'rgba(255,255,255,0.07)' : 'var(--surface-solid)',
      border: `1.5px solid ${dark ? 'rgba(255,255,255,0.14)' : 'var(--border-card)'}`,
      backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)',
      ...style,
    }}>
      <input
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        onKeyDown={(e) => { if (e.key === 'Enter') submit(); }}
        placeholder={listening ? 'Listening…' : placeholder}
        style={{
          flex: 1, border: 'none', outline: 'none', background: 'transparent',
          fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body)', fontWeight: 'var(--w-medium)',
          color: dark ? 'var(--text-on-dark)' : 'var(--text-strong)',
        }}
      />
      <IconButton variant={dark ? 'dark' : 'ghost'} size="md" label="Voice input" active={listening} onClick={onMic}>
        {listening ? '🔴' : '🎙️'}
      </IconButton>
      <IconButton variant="solid" size="md" label="Send" onClick={submit}>➤</IconButton>
    </div>
  );
}
