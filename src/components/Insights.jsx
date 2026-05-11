import React from 'react'
import { INSIGHTS } from '../data'

export default function Insights() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ fontSize: 13, color: 'var(--text2)', marginBottom: 4 }}>
        6 key findings from your Amazon + iHerb data — Jan to May 2026
      </div>
      {INSIGHTS.map((item, i) => (
        <div key={i} style={{
          background: 'var(--bg)',
          border: '1px solid var(--border)',
          borderRadius: 12,
          padding: '16px 18px',
          display: 'flex',
          gap: 14,
          alignItems: 'flex-start',
          borderLeft: `4px solid ${item.color}`,
        }}>
          <div style={{ fontSize: 22, flexShrink: 0, lineHeight: 1 }}>{item.icon}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text)', marginBottom: 5 }}>
              {item.title}
            </div>
            <div style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.6, marginBottom: 10 }}>
              {item.text}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
