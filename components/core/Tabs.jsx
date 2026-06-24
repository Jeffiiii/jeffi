import React from 'react';

/**
 * Tabs — underline/segmented navigation. items: [{key,label,icon?}].
 * variant: 'pill' (segmented glass) | 'underline'.
 */
export function Tabs({ items = [], value, onChange, variant = 'pill', dark = false, style = {} }) {
  if (variant === 'underline') {
    return (
      <div style={{ display: 'flex', gap: 'var(--space-6)', borderBottom: `1.5px solid ${dark ? 'rgba(255,255,255,0.12)' : 'var(--border-card)'}`, ...style }}>
        {items.map((it) => {
          const on = it.key === value;
          return (
            <button key={it.key} onClick={() => onChange && onChange(it.key)} style={{
              display: 'inline-flex', alignItems: 'center', gap: '7px',
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '12px 2px', marginBottom: -1.5,
              fontFamily: 'var(--font-display)', fontSize: 'var(--fs-small)', fontWeight: 'var(--w-heavy)',
              color: on ? 'var(--brand)' : (dark ? 'var(--text-on-dark)' : 'var(--text-muted)'),
              borderBottom: `2.5px solid ${on ? 'var(--brand)' : 'transparent'}`,
              transition: 'color var(--dur) var(--ease)',
            }}>
              {it.icon && <span>{it.icon}</span>}{it.label}
            </button>
          );
        })}
      </div>
    );
  }
  return (
    <div style={{
      display: 'inline-flex', gap: '4px', padding: '4px',
      background: dark ? 'rgba(255,255,255,0.06)' : 'var(--surface-sunken)',
      borderRadius: 'var(--radius-pill)', ...style,
    }}>
      {items.map((it) => {
        const on = it.key === value;
        return (
          <button key={it.key} onClick={() => onChange && onChange(it.key)} style={{
            display: 'inline-flex', alignItems: 'center', gap: '7px',
            padding: '8px 18px', border: 'none', cursor: 'pointer',
            borderRadius: 'var(--radius-pill)',
            fontFamily: 'var(--font-display)', fontSize: 'var(--fs-small)', fontWeight: 'var(--w-heavy)',
            color: on ? '#fff' : (dark ? 'var(--text-on-dark)' : 'var(--text-muted)'),
            background: on ? 'var(--brand)' : 'transparent',
            boxShadow: 'none',
            transition: 'all var(--dur) var(--ease)',
          }}>
            {it.icon && <span>{it.icon}</span>}{it.label}
          </button>
        );
      })}
    </div>
  );
}
