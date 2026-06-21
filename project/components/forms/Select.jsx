import React from 'react';

const HEIGHT = { sm: 'var(--control-h-sm)', md: 'var(--control-h-md)', lg: 'var(--control-h-lg)' };

/**
 * Native select styled to match Input, with a custom chevron.
 */
export function Select({ size = 'md', invalid = false, options = [], placeholder, children, style, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', ...style }}>
      <select
        onFocus={(e) => { setFocused(true); rest.onFocus?.(e); }}
        onBlur={(e) => { setFocused(false); rest.onBlur?.(e); }}
        {...rest}
        style={{
          appearance: 'none', WebkitAppearance: 'none',
          width: '100%', height: HEIGHT[size], padding: '0 38px 0 12px',
          background: 'var(--surface-card)',
          border: `1px solid ${invalid ? 'var(--red-500)' : focused ? 'var(--brand-500)' : 'var(--border-strong)'}`,
          borderRadius: 'var(--radius-md)',
          boxShadow: focused ? 'var(--focus-ring)' : 'var(--shadow-xs)',
          fontFamily: 'var(--font-body)', fontSize: 'var(--text-md)',
          color: 'var(--navy-900)', cursor: 'pointer', outline: 'none',
          transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        }}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((o) => {
          const val = typeof o === 'string' ? o : o.value;
          const lab = typeof o === 'string' ? o : o.label;
          return <option key={val} value={val}>{lab}</option>;
        })}
        {children}
      </select>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ position: 'absolute', right: 12, pointerEvents: 'none', color: 'var(--text-muted)' }}>
        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
