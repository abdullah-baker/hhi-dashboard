import React from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts'
import { Card, KPI, SectionTitle, Table, Td, Tag, Legend, fmt } from './ui'
import { SUMMARY, AMZ_CATEGORIES, DOW, TOP_PRODUCTS } from '../data'

const AMZ = '#ff9900'
const BLUE = '#2563eb'

const CAT_COLORS = ['#ff9900','#f97316','#eab308','#84cc16','#22c55e','#06b6d4','#3b82f6','#8b5cf6','#ec4899']

const tip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 8, padding: '10px 14px', fontSize: 12 }}>
      <div style={{ fontWeight: 600, marginBottom: 4, color: 'var(--text)' }}>{label}</div>
      {payload.map(p => <div key={p.name} style={{ color: p.color }}>{p.name}: {fmt.usd(p.value)}</div>)}
    </div>
  )
}

export default function Amazon() {
  const s = SUMMARY.amazon
  const dowData = DOW.map(d => ({ ...d, Spend: d.spend, Orders: d.orders }))

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(130px,1fr))', gap: 10, marginBottom: 20 }}>
        <KPI label="Gross Spend" value={fmt.usd(s.totalSpend)} sub="229 orders" />
        <KPI label="Discounts" value={fmt.usd(s.totalDiscounts)} badge={fmt.pct(s.discountRate) + ' rate'} badgeColor={{ bg: '#dbeafe', text: '#1d4ed8' }} />
        <KPI label="Units" value={fmt.num(s.units)} sub={s.uniqueSkus + ' unique SKUs'} />
        <KPI label="Avg Order" value={fmt.usd(s.avgOrder)} sub={'Closed: ' + s.closed} />
        <KPI label="Cancelled" value={s.cancelled} badge={fmt.pct(s.cancellationRate) + ' rate'} badgeColor={{ bg: '#fee2e2', text: '#dc2626' }} />
        <KPI label="Return Rate" value={fmt.pct(s.returnRate)} sub="1 refund $11.19" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
        <Card>
          <SectionTitle title="Top categories by spend" sub="Amazon — gross spend USD" />
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={AMZ_CATEGORIES} layout="vertical" margin={{ top: 0, right: 12, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" horizontal={false} />
              <XAxis type="number" tick={{ fontSize: 10, fill: 'var(--text2)' }} axisLine={false} tickLine={false} tickFormatter={v => '$' + v} />
              <YAxis dataKey="name" type="category" tick={{ fontSize: 11, fill: 'var(--text2)' }} axisLine={false} tickLine={false} width={90} />
              <Tooltip content={tip} />
              <Bar dataKey="spend" name="Spend" radius={[0,4,4,0]}>
                {AMZ_CATEGORIES.map((_, i) => <cell key={i} fill={CAT_COLORS[i % CAT_COLORS.length]} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <SectionTitle title="Orders by day of week" sub="Which day you shop most" />
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={dowData} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="day" tick={{ fontSize: 11, fill: 'var(--text2)' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: 'var(--text2)' }} axisLine={false} tickLine={false} />
              <Tooltip />
              <Bar dataKey="Orders" fill={BLUE} radius={[4,4,0,0]}>
                {DOW.map((d, i) => (
                  <cell key={i} fill={d.day === 'Fri' ? AMZ : BLUE} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Card>
        <SectionTitle title="Top 10 products by spend" sub="Amazon — ranked by gross spend" />
        <Table
          headers={['#', 'Product', 'Orders', 'Units', 'Spend', 'Discount', 'Disc %']}
          rows={TOP_PRODUCTS}
          renderRow={(row) => [
            <Td key="rank" align="center" style={{ fontWeight: 700, color: row.rank <= 3 ? '#ea580c' : 'var(--text2)' }}>{row.rank}</Td>,
            <Td key="name">{row.name}</Td>,
            <Td key="orders" align="center">{row.orders}</Td>,
            <Td key="units" align="center">{row.units}</Td>,
            <Td key="spend" align="right" style={{ fontWeight: 600 }}>{fmt.usd(row.spend)}</Td>,
            <Td key="disc" align="right" style={{ color: '#16a34a' }}>{row.discount > 0 ? fmt.usd(row.discount) : '—'}</Td>,
            <Td key="dpct" align="right">{row.discount > 0 ? fmt.pct((row.discount/row.spend)*100) : '—'}</Td>,
          ]}
        />
      </Card>
    </div>
  )
}
