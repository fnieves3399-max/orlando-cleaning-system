import React from 'react';

/**
 * Surface container. Optional padded body, header, and hover lift.
 */
export function Card({
  children, padding = 'md', interactive = false, accent = false, style, ...rest
}) {
  const pad = { none: 0, sm: 'var(--space-4)', md: 'var(--space-6)', lg: 'var(--space-7)' }[padding];
  return (
    <div
      style={{
        background: 'var(--surface-card)',
        border: '1px solid var(--border)',
        borderTop: accent ? '3px solid var(--brand-600)' : '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-sm)',
        padding: pad,
        transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
        cursor: interactive ? 'pointer' : 'default',
        ...style,
      }}
      onMouseEnter={interactive ? (e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      } : undefined}
      onMouseLeave={interactive ? (e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
        e.currentTarget.style.transform = 'translateY(0)';
      } : undefined}
      {...rest}
    >
      {children}
    </div>
  );
}

export function CardHeader({ title, subtitle, action, style, ...rest }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--space-4)', marginBottom: 'var(--space-4)', ...style }} {...rest}>
      <div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-lg)', color: 'var(--navy-900)', letterSpacing: '-0.01em' }}>{title}</div>
        {subtitle && <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', marginTop: 2 }}>{subtitle}</div>}
      </div>
      {action}
    </div>
  );
}
