import React from 'react';

/**
 * Labeled field wrapper. Provides label, optional hint, error, required mark.
 */
export function Field({ label, htmlFor, hint, error, required = false, children, style, ...rest }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }} {...rest}>
      {label && (
        <label htmlFor={htmlFor} style={{
          fontFamily: 'var(--font-display)', fontSize: 'var(--text-sm)', fontWeight: 600,
          color: 'var(--navy-900)', letterSpacing: '-0.01em',
        }}>
          {label}
          {required && <span style={{ color: 'var(--danger)', marginLeft: 3 }}>*</span>}
        </label>
      )}
      {children}
      {error
        ? <span style={{ fontSize: 'var(--text-xs)', color: 'var(--danger)' }}>{error}</span>
        : hint ? <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{hint}</span> : null}
    </div>
  );
}
