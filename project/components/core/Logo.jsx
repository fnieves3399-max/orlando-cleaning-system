import React from 'react';

/**
 * Brand logo + mark for Orlando Cleaning Growth System.
 * A fresh water-droplet tile with a sparkle = clean, Florida.
 */
export function Logo({ variant = 'full', size = 28, tone = 'color', style, ...rest }) {
  const isLight = tone === 'light'; // for use on navy/dark backgrounds
  const tileFill = isLight ? '#FFFFFF' : 'var(--brand-600)';
  const dropFill = isLight ? 'var(--brand-700)' : '#FFFFFF';
  const wordColor = isLight ? '#FFFFFF' : 'var(--navy-900)';
  const subColor = isLight ? 'var(--brand-200)' : 'var(--brand-600)';

  const Mark = (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="9" fill={tileFill} />
      <path
        d="M16 6.5c3.2 3.6 6 6.9 6 10.2a6 6 0 1 1-12 0c0-3.3 2.8-6.6 6-10.2Z"
        fill={dropFill}
      />
      <path
        d="M22.5 8.2l.5 1.4 1.4.5-1.4.5-.5 1.4-.5-1.4-1.4-.5 1.4-.5.5-1.4Z"
        fill={dropFill}
        opacity={isLight ? 0.9 : 0.85}
      />
    </svg>
  );

  if (variant === 'mark') {
    return <span style={{ display: 'inline-flex', ...style }} {...rest}>{Mark}</span>;
  }

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        fontFamily: 'var(--font-display)',
        ...style,
      }}
      {...rest}
    >
      {Mark}
      <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span style={{ fontWeight: 800, fontSize: size * 0.6, color: wordColor, letterSpacing: '-0.02em' }}>
          Orlando&nbsp;Cleaning
        </span>
        <span style={{ fontWeight: 700, fontSize: size * 0.34, color: subColor, letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: 3 }}>
          Growth System
        </span>
      </span>
    </span>
  );
}
