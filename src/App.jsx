import React, { useState } from 'react'
import Overview  from './components/Overview'
import Amazon    from './components/Amazon'
import Iherb     from './components/Iherb'
import Compare   from './components/Compare'
import Insights  from './components/Insights'

const TABS = [
  { id: 'overview', label: '📊 Overview' },
  { id: 'amazon',   label: '🛒 Amazon'   },
  { id: 'iherb',    label: '🌿 iHerb'    },
  { id: 'compare',  label: '⚖️ Compare'  },
  { id: 'insights', label: '💡 Insights' },
]

const PAGES = {
  overview: Overview,
  amazon:   Amazon,
  iherb:    Iherb,
  compare:  Compare,
  insights: Insights,
}

export default function App() {
  const [active, setActive] = useState('overview')
  const Page = PAGES[active]

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg2)' }}>
      {/* Header */}
      <header style={{
        background: 'var(--bg)',
        borderBottom: '1px solid var(--border)',
        position: 'sticky', top: 0, zIndex: 100,
        boxShadow: '0 1px 4px rgba(0,0,0,.06)',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 32, height: 32, background: '#2d8a4e', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>🌿</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--text)' }}>Holistic Health Iraq</div>
              <div style={{ fontSize: 11, color: 'var(--text2)' }}>Business Intelligence Dashboard</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: 'var(--text3)' }}>
            <span style={{ width: 6, height: 6, background: '#16a34a', borderRadius: '50%', display: 'inline-block' }} />
            Jan – May 2026
          </div>
        </div>
      </header>

      {/* Nav tabs */}
      <div style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 20px', display: 'flex', gap: 2, overflowX: 'auto' }}>
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              style={{
                padding: '12px 16px',
                background: 'transparent',
                border: 'none',
                borderBottom: active === tab.id ? '2px solid #2d8a4e' : '2px solid transparent',
                color: active === tab.id ? '#2d8a4e' : 'var(--text2)',
                fontWeight: active === tab.id ? 600 : 400,
                fontSize: 13,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all .15s',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Page content */}
      <main style={{ maxWidth: 1100, margin: '0 auto', padding: '24px 20px 48px' }}>
        <Page />
      </main>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '20px', fontSize: 11, color: 'var(--text3)', borderTop: '1px solid var(--border)', background: 'var(--bg)' }}>
        Holistic Health Iraq · Amazon + iHerb combined data · Jan–May 2026
      </footer>
    </div>
  )
}
