import React from 'react';

/**
 * Lightweight data table. `columns` = [{ key, header, align, render, width }],
 * `rows` = array of objects. `onRowClick` optional.
 */
export function Table({ columns = [], rows = [], onRowClick, style, ...rest }) {
  return (
    <div style={{
      border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)',
      overflow: 'hidden', background: 'var(--surface-card)', boxShadow: 'var(--shadow-sm)', ...style,
    }} {...rest}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'var(--text-md)' }}>
        <thead>
          <tr style={{ background: 'var(--gray-50)' }}>
            {columns.map((c) => (
              <th key={c.key} style={{
                textAlign: c.align || 'left', padding: '11px 16px', width: c.width,
                fontFamily: 'var(--font-display)', fontSize: 'var(--text-xs)', fontWeight: 700,
                letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-muted)',
                borderBottom: '1px solid var(--border)', whiteSpace: 'nowrap',
              }}>{c.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.id ?? i}
              onClick={onRowClick ? () => onRowClick(row) : undefined}
              style={{ cursor: onRowClick ? 'pointer' : 'default', transition: 'background var(--dur-fast) var(--ease-out)' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--gray-50)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
            >
              {columns.map((c) => (
                <td key={c.key} style={{
                  textAlign: c.align || 'left', padding: '13px 16px',
                  borderBottom: i === rows.length - 1 ? 'none' : '1px solid var(--border)',
                  color: 'var(--text-body)', verticalAlign: 'middle',
                }}>
                  {c.render ? c.render(row[c.key], row) : row[c.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
