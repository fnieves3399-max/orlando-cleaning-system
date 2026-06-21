import React from 'react';

/** Multi-line text input matching the Input style. */
export function Textarea({ invalid = false, rows = 4, style, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  return (
    <textarea
      rows={rows}
      onFocus={(e) => { setFocused(true); rest.onFocus?.(e); }}
      onBlur={(e) => { setFocused(false); rest.onBlur?.(e); }}
      {...rest}
      style={{
        width: '100%', padding: '10px 12px', resize: 'vertical',
        background: 'var(--surface-card)',
        border: `1px solid ${invalid ? 'var(--red-500)' : focused ? 'var(--brand-500)' : 'var(--border-strong)'}`,
        borderRadius: 'var(--radius-md)',
        boxShadow: focused ? 'var(--focus-ring)' : 'var(--shadow-xs)',
        fontFamily: 'var(--font-body)', fontSize: 'var(--text-md)', lineHeight: 1.5,
        color: 'var(--navy-900)', outline: 'none',
        transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        ...style,
      }}
    />
  );
}
