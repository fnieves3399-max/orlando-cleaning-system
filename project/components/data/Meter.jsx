import React from 'react';

/**
 * Horizontal progress / proportion bar. `value` 0–100. Optional label + value text.
 */
export function Meter({ value = 0, tone = 'brand', label, valueLabel, height = 8, style, ...rest }) {
  const fill = {
    brand: 'var(--brand-600)', success: 'var(--green-600)',
    warning: 'var(--amber-500)', danger: 'var(--red-500)', navy: 'var(--navy-800)',
  }[tone] || 'var(--brand-600)';
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }} {...rest}>
      {(label || valueLabel) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-sm)' }}>
          {label && <span style={{ color: 'var(--text-body)', fontWeight: 500 }}>{label}</span>}
          {valueLabel && <span style={{ color: 'var(--navy-900)', fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{valueLabel}</span>}
        </div>
      )}
      <div style={{ width: '100%', height, background: 'var(--gray-100)', borderRadius: 'var(--radius-pill)', overflow: 'hidden' }}>
        <div style={{ width: `${pct}%`, height: '100%', background: fill, borderRadius: 'var(--radius-pill)', transition: 'width var(--dur-slow) var(--ease-out)' }} />
      </div>
    </div>
  );
}
