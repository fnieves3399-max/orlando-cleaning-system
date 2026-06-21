import React from 'react';

const PADDING = { sm: '0 14px', md: '0 18px', lg: '0 24px' };
const HEIGHT = { sm: 'var(--control-h-sm)', md: 'var(--control-h-md)', lg: 'var(--control-h-lg)' };
const FONT = { sm: 'var(--text-sm)', md: 'var(--text-md)', lg: 'var(--text-lg)' };

const VARIANTS = {
  primary: {
    background: 'var(--brand-600)', color: 'var(--text-on-brand)',
    border: '1px solid var(--brand-600)', boxShadow: 'var(--shadow-xs)',
  },
  secondary: {
    background: 'var(--surface-card)', color: 'var(--navy-900)',
    border: '1px solid var(--border-strong)', boxShadow: 'var(--shadow-xs)',
  },
  ghost: {
    background: 'transparent', color: 'var(--brand-700)', border: '1px solid transparent',
  },
  success: {
    background: 'var(--green-600)', color: '#fff',
    border: '1px solid var(--green-600)', boxShadow: 'var(--shadow-xs)',
  },
  danger: {
    background: 'var(--surface-card)', color: 'var(--danger)',
    border: '1px solid var(--red-100)',
  },
};

/**
 * Primary interactive control. Variants, sizes, optional leading/trailing icon.
 */
export function Button({
  children, variant = 'primary', size = 'md', fullWidth = false,
  leadingIcon, trailingIcon, disabled = false, type = 'button', style, ...rest
}) {
  const base = VARIANTS[variant] || VARIANTS.primary;
  return (
    <button
      type={type}
      disabled={disabled}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
        height: HEIGHT[size], padding: PADDING[size], width: fullWidth ? '100%' : 'auto',
        fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: FONT[size],
        letterSpacing: '-0.01em', lineHeight: 1, whiteSpace: 'nowrap',
        borderRadius: 'var(--radius-md)', cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)',
        ...base, ...style,
      }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = 'translateY(1px)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
      {...rest}
    >
      {leadingIcon && <span style={{ display: 'inline-flex', marginLeft: -2 }} aria-hidden="true">{leadingIcon}</span>}
      {children}
      {trailingIcon && <span style={{ display: 'inline-flex', marginRight: -2 }} aria-hidden="true">{trailingIcon}</span>}
    </button>
  );
}
