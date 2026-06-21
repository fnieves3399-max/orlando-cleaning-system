import React from 'react';

/* Tone → background/text/border. Tints are soft; text is the deep variant. */
const TONES = {
  neutral: { bg: 'var(--gray-100)', fg: 'var(--gray-700)', bd: 'var(--gray-200)' },
  brand:   { bg: 'var(--brand-50)', fg: 'var(--brand-700)', bd: 'var(--brand-100)' },
  success: { bg: 'var(--green-50)', fg: 'var(--green-700)', bd: 'var(--green-100)' },
  warning: { bg: 'var(--amber-50)', fg: 'var(--amber-600)', bd: 'var(--amber-100)' },
  danger:  { bg: 'var(--red-50)', fg: 'var(--red-600)', bd: 'var(--red-100)' },
};

/* Map the product's lifecycle statuses to a tone. */
const STATUS_TONE = {
  'new lead': 'brand', 'new': 'brand',
  quoted: 'warning', pending: 'warning', scheduled: 'warning',
  booked: 'success', active: 'success', completed: 'success', paid: 'success',
  'in progress': 'brand',
  inactive: 'neutral', draft: 'neutral',
  lost: 'danger', canceled: 'danger', cancelled: 'danger', overdue: 'danger',
};

/**
 * Compact label. Pass `status` to auto-tone by lifecycle state, or set `tone`.
 */
export function Badge({ children, tone, status, dot = false, style, ...rest }) {
  const resolved = tone || (status ? STATUS_TONE[String(status).toLowerCase()] : null) || 'neutral';
  const t = TONES[resolved] || TONES.neutral;
  const label = children || status;
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        height: 22, padding: '0 9px',
        background: t.bg, color: t.fg, border: `1px solid ${t.bd}`,
        borderRadius: 'var(--radius-pill)',
        fontFamily: 'var(--font-display)', fontSize: 'var(--text-xs)', fontWeight: 600,
        letterSpacing: '0.01em', textTransform: 'capitalize', whiteSpace: 'nowrap',
        ...style,
      }}
      {...rest}
    >
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: t.fg }} />}
      {label}
    </span>
  );
}
