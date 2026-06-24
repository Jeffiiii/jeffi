import React from 'react';

/**
 * Button — the primary action control.
 * Variants: primary (brand gradient), secondary (glass), ghost (text), dark (on-dark glass).
 * Sizes: sm, md, lg. Pill-shaped, gentle lift on hover.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon = null,
  iconRight = null,
  disabled = false,
  href,
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: '8px 16px', fontSize: '0.82rem', gap: '6px' },
    md: { padding: '12px 24px', fontSize: '0.95rem', gap: '8px' },
    lg: { padding: '15px 32px', fontSize: '1.05rem', gap: '10px' },
  };

  const variants = {
    primary: {
      background: 'var(--brand)',
      color: 'var(--brand-on)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)',
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1.5px solid var(--border-strong)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--brand)',
      border: '1.5px solid transparent',
    },
    dark: {
      background: 'rgba(255,255,255,0.06)',
      color: 'var(--text-on-dark)',
      border: '1px solid rgba(255,255,255,0.20)',
    },
  };

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    letterSpacing: '-0.01em',
    borderRadius: 'var(--radius-xs)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out), background var(--dur) var(--ease), border-color var(--dur) var(--ease)',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    ...sizes[size],
    ...variants[variant],
    ...style,
  };

  const onEnter = (e) => {
    if (disabled) return;
    e.currentTarget.style.transform = 'translateY(-2px)';
    if (variant === 'primary') e.currentTarget.style.background = 'var(--brand-hover)';
    if (variant === 'secondary') { e.currentTarget.style.borderColor = 'var(--brand)'; e.currentTarget.style.color = 'var(--brand)'; }
    if (variant === 'dark') e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
  };
  const onLeave = (e) => {
    if (disabled) return;
    e.currentTarget.style.transform = 'translateY(0)';
    if (variant === 'primary') e.currentTarget.style.background = 'var(--brand)';
    if (variant === 'secondary') { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.color = 'var(--text-strong)'; }
    if (variant === 'dark') e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
  };
  const onDown = (e) => { if (!disabled) e.currentTarget.style.transform = 'scale(var(--press-scale))'; };
  const onUp = (e) => { if (!disabled) e.currentTarget.style.transform = 'translateY(-2px)'; };

  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      href={href}
      onClick={disabled ? undefined : onClick}
      disabled={href ? undefined : disabled}
      style={base}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onMouseDown={onDown}
      onMouseUp={onUp}
      {...rest}
    >
      {icon && <span style={{ display: 'inline-flex' }}>{icon}</span>}
      {children}
      {iconRight && <span style={{ display: 'inline-flex' }}>{iconRight}</span>}
    </Tag>
  );
}
