import React from 'react';

/**
 * ChatBubble — a single chat message. from: 'elysia' | 'user'.
 * Elysia's bubbles are soft pink glass (left); the viewer's are plum (right).
 * Pass typing to render the three-dot indicator.
 */
export function ChatBubble({ from = 'elysia', children, name, time, typing = false, style = {} }) {
  const isElysia = from === 'elysia';
  const row = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: isElysia ? 'flex-start' : 'flex-end',
    gap: '4px',
    maxWidth: '82%',
    alignSelf: isElysia ? 'flex-start' : 'flex-end',
    ...style,
  };
  const bubble = {
    padding: '11px 16px',
    borderRadius: isElysia ? '6px 18px 18px 18px' : '18px 6px 18px 18px',
    fontSize: 'var(--fs-body)',
    fontWeight: 'var(--w-medium)',
    lineHeight: 1.55,
    color: isElysia ? 'var(--plum-900)' : '#fff',
    background: isElysia
      ? 'linear-gradient(135deg, #ffe1ef, #ffd1e6)'
      : 'var(--brand-gradient)',
    border: isElysia ? '1px solid rgba(214,51,122,0.16)' : '1px solid transparent',
    boxShadow: 'var(--shadow-sm)',
    wordBreak: 'break-word',
  };
  const meta = { fontSize: 'var(--fs-micro)', fontWeight: 'var(--w-bold)', color: 'var(--text-faint)', padding: '0 4px' };
  return (
    <div style={row}>
      {(name || time) && (
        <div style={{ display: 'flex', gap: '8px', alignItems: 'baseline' }}>
          {name && <span style={{ ...meta, color: isElysia ? 'var(--brand)' : 'var(--text-muted)' }}>{name}</span>}
          {time && <span style={meta}>{time}</span>}
        </div>
      )}
      <div style={bubble}>
        {typing ? <TypingDots /> : children}
      </div>
    </div>
  );
}

function TypingDots() {
  const dot = (i) => ({
    width: 7, height: 7, borderRadius: '50%', background: 'var(--elysia-600)',
    display: 'inline-block',
    animation: `elysiaTyping 1.2s ${i * 0.15}s infinite ease-in-out`,
  });
  return (
    <span style={{ display: 'inline-flex', gap: 5, alignItems: 'center', padding: '2px 2px' }}>
      <style>{`@keyframes elysiaTyping{0%,60%,100%{transform:translateY(0);opacity:.5}30%{transform:translateY(-5px);opacity:1}}`}</style>
      <i style={dot(0)} /><i style={dot(1)} /><i style={dot(2)} />
    </span>
  );
}
