import React from 'react';

/**
 * IconButton — a circular icon-only control for chrome (send, mic, play, close…).
 * Variants: solid (brand), glass, ghost, dark.
 */
export function IconButton({
  children,
  label,
  variant = 'ghost',
  size = 'md',
  active = false,
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const dims = { sm: 32, md: 40, lg: 52 };
  const d = dims[size] || 40;

  const variants = {
    solid: { background: 'var(--brand)', color: '#fff', boxShadow: 'var(--shadow-sm)', border: '1px solid transparent' },
    glass: { background: 'transparent', color: 'var(--text-strong)', border: '1px solid var(--border-strong)' },
    ghost: { background: active ? 'var(--brand-soft)' : 'transparent', color: active ? 'var(--brand)' : 'var(--text-muted)', border: '1px solid transparent' },
    dark: { background: active ? 'rgba(242,90,158,0.18)' : 'rgba(255,255,255,0.05)', color: active ? 'var(--elysia-300)' : 'var(--text-on-dark)', border: '1px solid rgba(255,255,255,0.14)' },
  };

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: d,
    height: d,
    fontSize: d * 0.42,
    borderRadius: 'var(--radius-full)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'transform var(--dur) var(--ease-out), background var(--dur) var(--ease)',
    flexShrink: 0,
    ...variants[variant],
    ...style,
  };

  return (
    <button
      aria-label={label}
      title={label}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      style={base}
      onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.transform = 'scale(1.1)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = 'scale(0.92)'; }}
      onMouseUp={(e) => { if (!disabled) e.currentTarget.style.transform = 'scale(1.1)'; }}
      {...rest}
    >
      {children}
    </button>
  );
}
