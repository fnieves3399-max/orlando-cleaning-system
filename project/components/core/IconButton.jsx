import React from 'react';

const SIZES = { sm: 32, md: 40, lg: 48 };

/**
 * Square icon-only button. Pass an SVG/icon node as children.
 */
export function IconButton({
  children, size = 'md', variant = 'secondary', label, disabled = false, style, ...rest
}) {
  const dim = SIZES[size];
  const variants = {
    secondary: { background: 'var(--surface-card)', color: 'var(--gray-700)', border: '1px solid var(--border-strong)' },
    ghost: { background: 'transparent', color: 'var(--gray-600)', border: '1px solid transparent' },
    primary: { background: 'var(--brand-600)', color: '#fff', border: '1px solid var(--brand-600)' },
  };
  return (
    <button
      type="button" aria-label={label} disabled={disabled}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: dim, height: dim, padding: 0,
        borderRadius: 'var(--radius-md)', cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transition: 'background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)',
        ...(variants[variant] || variants.secondary), ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
