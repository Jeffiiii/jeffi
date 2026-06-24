import React from 'react';

/**
 * Avatar — circular image/emoji avatar with optional pink ring & speaking pulse.
 * For Elysia, pass the avatar art via `src` or an emoji/glyph via children.
 */
export function Avatar({ src, children, size = 56, ring = false, speaking = false, status, style = {}, ...rest }) {
  const wrap = {
    position: 'relative',
    width: size,
    height: size,
    flexShrink: 0,
    ...style,
  };
  const circle = {
    width: '100%',
    height: '100%',
    borderRadius: 'var(--radius-full)',
    objectFit: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: size * 0.5,
    background: src ? 'transparent' : 'var(--brand-gradient-soft)',
    border: ring ? '2.5px solid var(--elysia-400)' : '2px solid var(--white)',
    boxShadow: speaking ? '0 0 0 4px rgba(242,90,158,0.35)' : 'var(--shadow-sm)',
    transition: 'box-shadow var(--dur) var(--ease)',
    overflow: 'hidden',
  };
  const dotColors = { online: 'var(--success)', live: 'var(--brand)', away: 'var(--warning)' };
  return (
    <div style={wrap} {...rest}>
      {src
        ? <img src={src} alt="" style={circle} />
        : <div style={circle}>{children}</div>}
      {status && (
        <span style={{
          position: 'absolute', right: 0, bottom: 0,
          width: size * 0.28, height: size * 0.28,
          minWidth: 10, minHeight: 10,
          borderRadius: '50%', background: dotColors[status] || 'var(--success)',
          border: '2px solid var(--white)',
        }} />
      )}
    </div>
  );
}
