import React from 'react';

/**
 * Underline tab bar. `tabs` = [{ id, label, count? }]. Controlled via `value`/`onChange`.
 */
export function Tabs({ tabs = [], value, onChange, style, ...rest }) {
  return (
    <div style={{ display: 'flex', gap: 4, borderBottom: '1px solid var(--border)', ...style }} {...rest}>
      {tabs.map((t) => {
        const active = t.id === value;
        return (
          <button
            key={t.id}
            type="button"
            onClick={() => onChange?.(t.id)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              padding: '10px 14px', marginBottom: -1, background: 'transparent', cursor: 'pointer',
              border: 'none', borderBottom: `2px solid ${active ? 'var(--brand-600)' : 'transparent'}`,
              fontFamily: 'var(--font-display)', fontSize: 'var(--text-md)', fontWeight: 600,
              color: active ? 'var(--navy-900)' : 'var(--text-muted)',
              transition: 'color var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
            }}
          >
            {t.label}
            {t.count != null && (
              <span style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                minWidth: 20, height: 18, padding: '0 6px', borderRadius: 'var(--radius-pill)',
                background: active ? 'var(--brand-100)' : 'var(--gray-100)',
                color: active ? 'var(--brand-700)' : 'var(--text-muted)',
                fontSize: 'var(--text-2xs)', fontWeight: 700, fontVariantNumeric: 'tabular-nums',
              }}>{t.count}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
