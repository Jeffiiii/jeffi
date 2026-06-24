import React from 'react';

/**
 * Badge — small status/category pill. tones map to semantic + brand colors.
 */
export function Badge({ children, tone = 'brand', solid = false, style = {}, ...rest }) {
  const map = {
    brand:   ['var(--elysia-600)', 'rgba(214,51,122,0.12)'],
    jeffi:   ['var(--jeffi-600)', 'rgba(13,148,136,0.14)'],
    lavender:['#8a5fc4', 'rgba(196,168,232,0.20)'],
    mint:    ['#2f9a7d', 'rgba(168,221,208,0.28)'],
    crystal: ['#2b8fb0', 'rgba(143,211,232,0.26)'],
    success: ['var(--success)', 'rgba(63,185,138,0.16)'],
    warning: ['#b9791f', 'rgba(240,169,58,0.18)'],
    danger:  ['var(--danger)', 'rgba(226,81,107,0.16)'],
    neutral: ['var(--plum-600)', 'rgba(122,77,110,0.12)'],
  };
  const [fg, bg] = map[tone] || map.brand;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    padding: '3px 11px',
    fontFamily: 'var(--font-display)',
    fontSize: 'var(--fs-tiny)',
    fontWeight: 'var(--w-heavy)',
    lineHeight: 1.6,
    borderRadius: 'var(--radius-pill)',
    color: solid ? '#fff' : fg,
    background: solid ? fg : bg,
    border: solid ? '1px solid transparent' : `1px solid ${fg}22`,
    whiteSpace: 'nowrap',
    ...style,
  };
  return <span style={base} {...rest}>{children}</span>;
}
