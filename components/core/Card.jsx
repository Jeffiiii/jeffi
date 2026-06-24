import React from 'react';

/**
 * Card — translucent glass surface, soft pink shadow, rounded.
 * tones: glass (default), solid, tint, dark. Optional hover lift.
 */
export function Card({ children, tone = 'glass', hover = false, padding = 'var(--space-6)', style = {}, ...rest }) {
  const tones = {
    glass: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-card)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      color: 'var(--text-body)',
    },
    solid: { background: 'var(--surface-solid)', border: '1px solid var(--border-soft)', color: 'var(--text-body)' },
    tint: { background: 'var(--surface-tint)', border: '1px solid var(--border-soft)', color: 'var(--text-body)' },
    dark: {
      background: 'var(--glass-bg-dark)',
      border: '1px solid rgba(255,255,255,0.10)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      color: 'var(--text-on-dark)',
    },
    surface: {
      background: 'var(--site-card-bg)',
      border: '1px solid var(--site-card-border)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      color: 'var(--site-text-soft)',
    },
  };

  const base = {
    borderRadius: 'var(--radius-xl)',
    boxShadow: tone === 'dark' ? '0 16px 48px rgba(0,0,0,0.4)' : 'var(--shadow-md)',
    padding,
    transition: 'transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)',
    ...tones[tone],
    ...style,
  };

  return (
    <div
      style={base}
      onMouseEnter={hover ? (e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; } : undefined}
      onMouseLeave={hover ? (e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = tone === 'dark' ? '0 16px 48px rgba(0,0,0,0.4)' : 'var(--shadow-md)'; } : undefined}
      {...rest}
    >
      {children}
    </div>
  );
}
