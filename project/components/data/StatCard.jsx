import React from 'react';

/**
 * Dashboard metric tile: label, big value, optional delta + icon.
 * `tone` tints the icon chip; `trend` ('up'|'down') colors the delta.
 */
export function StatCard({
  label, value, delta, trend, icon, tone = 'brand', hint, style, ...rest
}) {
  const chip = {
    brand: { bg: 'var(--brand-50)', fg: 'var(--brand-600)' },
    success: { bg: 'var(--green-50)', fg: 'var(--green-600)' },
    warning: { bg: 'var(--amber-50)', fg: 'var(--amber-600)' },
    navy: { bg: 'var(--gray-100)', fg: 'var(--navy-800)' },
    danger: { bg: 'var(--red-50)', fg: 'var(--red-600)' },
  }[tone] || { bg: 'var(--brand-50)', fg: 'var(--brand-600)' };

  const trendColor = trend === 'down' ? 'var(--danger)' : 'var(--positive)';

  return (
    <div
      style={{
        display: 'flex', flexDirection: 'column', gap: 14,
        background: 'var(--surface-card)', border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)',
        padding: 'var(--space-5)', ...style,
      }}
      {...rest}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{
          fontFamily: 'var(--font-display)', fontSize: 'var(--text-sm)', fontWeight: 600,
          color: 'var(--text-muted)', letterSpacing: '0.01em',
        }}>{label}</span>
        {icon && (
          <span style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 34, height: 34, borderRadius: 'var(--radius-md)',
            background: chip.bg, color: chip.fg,
          }}>{icon}</span>
        )}
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
        <span style={{
          fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', fontWeight: 800,
          color: 'var(--navy-900)', letterSpacing: '-0.02em', lineHeight: 1,
          fontVariantNumeric: 'tabular-nums',
        }}>{value}</span>
        {delta && (
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 3,
            fontSize: 'var(--text-sm)', fontWeight: 700, color: trendColor,
            fontVariantNumeric: 'tabular-nums',
          }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transform: trend === 'down' ? 'rotate(180deg)' : 'none' }}>
              <path d="M6 2.5v7M6 2.5L3 5.5M6 2.5l3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {delta}
          </span>
        )}
      </div>
      {hint && <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-faint)', marginTop: -4 }}>{hint}</span>}
    </div>
  );
}
