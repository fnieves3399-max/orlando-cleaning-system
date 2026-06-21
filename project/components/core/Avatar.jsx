import React from 'react';

const SIZES = { xs: 24, sm: 32, md: 40, lg: 56 };
const PALETTE = ['var(--brand-600)', 'var(--green-600)', 'var(--navy-700)', 'var(--amber-600)', 'var(--brand-800)'];

function initials(name = '') {
  return name.trim().split(/\s+/).slice(0, 2).map((p) => p[0] || '').join('').toUpperCase();
}
function pick(name = '') {
  let h = 0; for (let i = 0; i < name.length; i++) h = name.charCodeAt(i) + ((h << 5) - h);
  return PALETTE[Math.abs(h) % PALETTE.length];
}

/**
 * Circular avatar. Renders an image, else colored initials derived from name.
 */
export function Avatar({ name = '', src, size = 'md', style, ...rest }) {
  const dim = SIZES[size] || SIZES.md;
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: dim, height: dim, borderRadius: '50%', flexShrink: 0, overflow: 'hidden',
        background: src ? 'var(--gray-100)' : pick(name), color: '#fff',
        fontFamily: 'var(--font-display)', fontWeight: 700,
        fontSize: dim * 0.4, letterSpacing: '0.01em',
        boxShadow: 'inset 0 0 0 1px rgba(12,33,56,0.06)',
        ...style,
      }}
      {...rest}
    >
      {src ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : initials(name)}
    </span>
  );
}
