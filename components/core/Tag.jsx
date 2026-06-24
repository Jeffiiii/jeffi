import React from 'react';

/**
 * Tag — restrained chip. Outline by default, a flat solid fill when active.
 * No glass blur, no gradient — accent used sparingly.
 */
export function Tag({ children, active = false, onClick, dark = false, style = {}, ...rest }) {
  const interactive = !!onClick;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '7px',
    padding: '7px 15px',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.78rem',
    fontWeight: 500,
    letterSpacing: '0.02em',
    borderRadius: 'var(--radius-xs)',
    cursor: interactive ? 'pointer' : 'default',
    transition: 'color var(--dur) var(--ease), border-color var(--dur) var(--ease), background var(--dur) var(--ease)',
    color: active ? (dark ? 'var(--ink, #0e0a12)' : '#fff') : (dark ? 'var(--text-on-dark)' : 'var(--text-muted)'),
    background: active ? 'var(--brand)' : 'transparent',
    border: active
      ? '1px solid var(--brand)'
      : (dark ? '1px solid rgba(255,255,255,0.16)' : '1px solid var(--border-strong)'),
    whiteSpace: 'nowrap',
    ...style,
  };
  return (
    <span
      onClick={onClick}
      style={base}
      onMouseEnter={interactive && !active ? (e) => { e.currentTarget.style.borderColor = 'var(--brand)'; e.currentTarget.style.color = dark ? '#fff' : 'var(--brand)'; } : undefined}
      onMouseLeave={interactive && !active ? (e) => { e.currentTarget.style.borderColor = dark ? 'rgba(255,255,255,0.16)' : 'var(--border-strong)'; e.currentTarget.style.color = dark ? 'var(--text-on-dark)' : 'var(--text-muted)'; } : undefined}
      {...rest}
    >
      {children}
    </span>
  );
}
