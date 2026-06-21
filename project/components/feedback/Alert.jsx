import React from 'react';

const TONES = {
  info:    { bg: 'var(--brand-50)', bd: 'var(--brand-100)', fg: 'var(--brand-700)', icon: 'var(--brand-600)' },
  success: { bg: 'var(--green-50)', bd: 'var(--green-100)', fg: 'var(--green-700)', icon: 'var(--green-600)' },
  warning: { bg: 'var(--amber-50)', bd: 'var(--amber-100)', fg: 'var(--amber-600)', icon: 'var(--amber-600)' },
  danger:  { bg: 'var(--red-50)', bd: 'var(--red-100)', fg: 'var(--red-600)', icon: 'var(--red-600)' },
};

const GLYPH = {
  info: 'M8 7.5v4M8 5.2h.01', success: 'M4.5 8.2l2.3 2.3L11.5 6',
  warning: 'M8 5v4M8 11.2h.01', danger: 'M5.5 5.5l5 5M10.5 5.5l-5 5',
};

/** Inline contextual message banner. */
export function Alert({ tone = 'info', title, children, style, ...rest }) {
  const t = TONES[tone] || TONES.info;
  return (
    <div style={{
      display: 'flex', gap: 12, padding: '13px 16px',
      background: t.bg, border: `1px solid ${t.bd}`, borderRadius: 'var(--radius-md)', ...style,
    }} {...rest}>
      <span style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: 22, height: 22, borderRadius: '50%', flexShrink: 0, marginTop: 1,
        background: 'var(--surface-card)', color: t.icon,
        boxShadow: 'inset 0 0 0 1.5px currentColor',
      }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d={GLYPH[tone]} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <div style={{ flex: 1 }}>
        {title && <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-md)', color: t.fg, marginBottom: children ? 2 : 0 }}>{title}</div>}
        {children && <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)' }}>{children}</div>}
      </div>
    </div>
  );
}
