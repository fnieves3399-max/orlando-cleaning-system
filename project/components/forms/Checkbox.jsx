import React from 'react';

/** Checkbox with label. Controlled via `checked`/`onChange`. */
export function Checkbox({ checked = false, onChange, label, disabled = false, style, ...rest }) {
  return (
    <label style={{
      display: 'inline-flex', alignItems: 'center', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1, fontSize: 'var(--text-md)', color: 'var(--text-body)', ...style,
    }} {...rest}>
      <span
        onClick={() => !disabled && onChange?.(!checked)}
        style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: 20, height: 20, flexShrink: 0,
          background: checked ? 'var(--brand-600)' : 'var(--surface-card)',
          border: `1.5px solid ${checked ? 'var(--brand-600)' : 'var(--border-strong)'}`,
          borderRadius: 'var(--radius-xs)',
          transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
        }}
      >
        {checked && (
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M2.5 6.8l2.6 2.6L10.5 4" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      {label}
    </label>
  );
}
