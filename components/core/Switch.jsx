import React from 'react';

/** Switch — pill toggle with a sliding pink knob. */
export function Switch({ checked = false, onChange, label, disabled = false, style = {}, ...rest }) {
  const track = {
    position: 'relative',
    width: 46,
    height: 26,
    borderRadius: 'var(--radius-pill)',
    background: checked ? 'var(--brand)' : 'var(--ash)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background var(--dur) var(--ease)',
    flexShrink: 0,
    border: 'none',
    padding: 0,
    boxShadow: checked ? 'var(--shadow-sm)' : 'inset 0 1px 2px rgba(0,0,0,0.08)',
  };
  const knob = {
    position: 'absolute',
    top: 3,
    left: checked ? 23 : 3,
    width: 20,
    height: 20,
    borderRadius: '50%',
    background: '#fff',
    boxShadow: 'var(--shadow-sm)',
    transition: 'left var(--dur) var(--ease-bounce)',
  };
  const row = { display: 'inline-flex', alignItems: 'center', gap: '10px', opacity: disabled ? 0.5 : 1, ...style };
  return (
    <label style={row}>
      <button
        role="switch"
        aria-checked={checked}
        onClick={disabled ? undefined : () => onChange && onChange(!checked)}
        style={track}
        disabled={disabled}
        {...rest}
      >
        <span style={knob} />
      </button>
      {label && <span style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--w-bold)', fontSize: 'var(--fs-small)', color: 'var(--text-body)' }}>{label}</span>}
    </label>
  );
}
