import React from 'react';

const HEIGHT = { sm: 'var(--control-h-sm)', md: 'var(--control-h-md)', lg: 'var(--control-h-lg)' };

/**
 * Text input. Optional leading adornment (e.g. $ or an icon) and invalid state.
 */
export function Input({ size = 'md', invalid = false, leading, trailing, style, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 8,
      height: HEIGHT[size], padding: '0 12px',
      background: 'var(--surface-card)',
      border: `1px solid ${invalid ? 'var(--red-500)' : focused ? 'var(--brand-500)' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focused ? 'var(--focus-ring)' : 'var(--shadow-xs)',
      transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...style,
    }}>
      {leading && <span style={{ display: 'inline-flex', color: 'var(--text-muted)', fontSize: 'var(--text-md)' }}>{leading}</span>}
      <input
        onFocus={(e) => { setFocused(true); rest.onFocus?.(e); }}
        onBlur={(e) => { setFocused(false); rest.onBlur?.(e); }}
        {...rest}
        style={{
          flex: 1, minWidth: 0, height: '100%', border: 'none', outline: 'none', background: 'transparent',
          fontFamily: 'var(--font-body)', fontSize: 'var(--text-md)', color: 'var(--navy-900)',
        }}
      />
      {trailing && <span style={{ display: 'inline-flex', color: 'var(--text-muted)' }}>{trailing}</span>}
    </div>
  );
}
