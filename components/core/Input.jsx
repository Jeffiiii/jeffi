import React from 'react';

/**
 * Input — text field / textarea with soft rounded border and pink focus ring.
 */
export function Input({ as = 'input', icon = null, dark = false, style = {}, wrapStyle = {}, ...rest }) {
  const Tag = as;
  const wrap = {
    display: 'flex',
    alignItems: as === 'textarea' ? 'flex-start' : 'center',
    gap: '10px',
    padding: as === 'textarea' ? '12px 16px' : '0 16px',
    height: as === 'textarea' ? 'auto' : '46px',
    borderRadius: 'var(--radius-md)',
    background: dark ? 'rgba(255,255,255,0.06)' : 'var(--surface-solid)',
    border: `1.5px solid ${dark ? 'rgba(255,255,255,0.14)' : 'var(--border-card)'}`,
    transition: 'border-color var(--dur) var(--ease), box-shadow var(--dur) var(--ease)',
    ...wrapStyle,
  };
  const field = {
    flex: 1,
    border: 'none',
    outline: 'none',
    background: 'transparent',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--fs-body)',
    fontWeight: 'var(--w-medium)',
    color: dark ? 'var(--text-on-dark)' : 'var(--text-strong)',
    resize: as === 'textarea' ? 'vertical' : undefined,
    minHeight: as === 'textarea' ? '60px' : undefined,
    padding: as === 'textarea' ? 0 : '12px 0',
    lineHeight: 1.5,
    ...style,
  };
  return (
    <div
      style={wrap}
      onFocusCapture={(e) => { e.currentTarget.style.borderColor = 'var(--brand)'; e.currentTarget.style.boxShadow = '0 0 0 3px var(--focus-ring)'; }}
      onBlurCapture={(e) => { e.currentTarget.style.borderColor = dark ? 'rgba(255,255,255,0.14)' : 'var(--border-card)'; e.currentTarget.style.boxShadow = 'none'; }}
    >
      {icon && <span style={{ display: 'inline-flex', color: 'var(--text-faint)', flexShrink: 0 }}>{icon}</span>}
      <Tag style={field} {...rest} />
    </div>
  );
}
