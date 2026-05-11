import React from 'react'

const s = {
  card: {
    background: 'var(--bg)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-lg)',
    padding: '16px 18px',
    boxShadow: 'var(--shadow)',
  },
  kpi: {
    background: 'var(--bg2)',
    borderRadius: 'var(--radius)',
    padding: '14px 16px',
    border: '1px solid var(--border)',
  },
  kpiLabel: { fontSize: 11, color: 'var(--text2)', marginBottom: 4, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '.4px' },
  kpiValue: { fontSize: 24, fontWeight: 600, color: 'var(--text)', lineHeight: 1.1 },
  kpiSub: { fontSize: 11, color: 'var(--text3)', marginTop: 4 },
  badge: { display: 'inline-block', padding: '2px 8px', borderRadius: 20, fontSize: 11, fontWeight: 600 },
  sectionTitle: { fontSize: 13, fontWeight: 600, color: 'var(--text)', marginBottom: 2 },
  sectionSub: { fontSize: 11, color: 'var(--text2)', marginBottom: 14 },
  th: { background: 'var(--bg2)', color: 'var(--text2)', fontWeight: 600, padding: '8px 12px', textAlign: 'left', borderBottom: '1px solid var(--border)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.3px' },
  td: { padding: '8px 12px', borderBottom: '1px solid var(--border)', fontSize: 12, color: 'var(--text)' },
}

export const Card = ({ children, style, className }) => (
  <div style={{ ...s.card, ...style }} className={className}>{children}</div>
)

export const KPI = ({ label, value, sub, badge, badgeColor }) => (
  <div style={s.kpi}>
    <div style={s.kpiLabel}>{label}</div>
    <div style={s.kpiValue}>{value}</div>
    {badge && (
      <div style={{ ...s.badge, background: badgeColor?.bg || '#dcfce7', color: badgeColor?.text || '#16a34a', marginTop: 5 }}>
        {badge}
      </div>
    )}
    {sub && !badge && <div style={s.kpiSub}>{sub}</div>}
  </div>
)

export const SectionTitle = ({ title, sub }) => (
  <div style={{ marginBottom: 14 }}>
    <div style={s.sectionTitle}>{title}</div>
    {sub && <div style={s.sectionSub}>{sub}</div>}
  </div>
)

export const Table = ({ headers, rows, renderRow }) => (
  <div style={{ overflowX: 'auto' }}>
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>{headers.map(h => <th key={h} style={s.th}>{h}</th>)}</tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} style={{ background: i % 2 === 0 ? 'var(--bg)' : 'var(--bg2)' }}>
            {renderRow(row, i)}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export const Td = ({ children, align, style }) => (
  <td style={{ ...s.td, textAlign: align || 'left', ...style }}>{children}</td>
)

export const Tag = ({ children, color }) => {
  const colors = {
    blue:   { bg: '#dbeafe', text: '#1d4ed8' },
    green:  { bg: '#dcfce7', text: '#16a34a' },
    orange: { bg: '#ffedd5', text: '#ea580c' },
    purple: { bg: '#ede9fe', text: '#7c3aed' },
    gray:   { bg: '#f3f4f6', text: '#4b5563' },
    amber:  { bg: '#fef3c7', text: '#d97706' },
  }
  const c = colors[color] || colors.gray
  return (
    <span style={{ ...s.badge, background: c.bg, color: c.text, fontSize: 10 }}>{children}</span>
  )
}

export const Legend = ({ items }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 12, fontSize: 11, color: 'var(--text2)' }}>
    {items.map(({ label, color }) => (
      <span key={label} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        <span style={{ width: 10, height: 10, borderRadius: 2, background: color, flexShrink: 0 }} />
        {label}
      </span>
    ))}
  </div>
)

export const fmt = {
  usd: (n) => '$' + Number(n).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
  usd2: (n) => '$' + Number(n).toFixed(2),
  pct: (n) => Number(n).toFixed(1) + '%',
  num: (n) => Number(n).toLocaleString(),
}
