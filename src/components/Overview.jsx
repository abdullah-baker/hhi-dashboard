import React from 'react'
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend as RLegend,
  ResponsiveContainer
} from 'recharts'
import { Card, KPI, SectionTitle, Legend, fmt } from './ui'
import { SUMMARY, MONTHLY } from '../data'

const AMZ = '#ff9900'
const IHR = '#2d8a4e'
const BLUE = '#2563eb'

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 8, padding: '10px 14px', fontSize: 12 }}>
      <div style={{ fontWeight: 600, marginBottom: 6, color: 'var(--text)' }}>{label}</div>
      {payload.map(p => (
        <div key={p.name} style={{ color: p.color, marginBottom: 2 }}>
          {p.name}: {fmt.usd(p.value)}
        </div>
      ))}
    </div>
  )
}

export default function Overview() {
  const combined = SUMMARY.amazon.totalSpend + SUMMARY.iherb.totalSpend
  const combinedDisc = SUMMARY.amazon.totalDiscounts + SUMMARY.iherb.totalDiscounts
  const combinedUnits = SUMMARY.amazon.units + SUMMARY.iherb.units

  const pieData = [
    { name: 'Amazon', value: SUMMARY.amazon.totalSpend },
    { name: 'iHerb',  value: SUMMARY.iherb.totalSpend },
  ]

  const discData = MONTHLY.map(m => ({
    month: m.month,
    Savings: +(m.amzDisc + m.ihDisc).toFixed(2),
  }))

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(130px,1fr))', gap: 10, marginBottom: 20 }}>
        <KPI label="Total Procurement" value={fmt.usd(combined)} sub="Amazon + iHerb" />
        <KPI label="Total Discounts" value={fmt.usd(combinedDisc)} badge={fmt.pct((combinedDisc/combined)*100) + ' rate'} badgeColor={{ bg: '#dcfce7', text: '#16a34a' }} />
        <KPI label="Total Orders" value={fmt.num(236)} sub="229 Amazon · 7 iHerb" />
        <KPI label="Total Units" value={fmt.num(combinedUnits)} sub="585 Amazon · 66 iHerb" />
        <KPI label="Growth Jan→Apr" value="15x" badge="$457 → $7,033" badgeColor={{ bg: '#dcfce7', text: '#16a34a' }} />
        <KPI label="Active Buyers" value="2" sub="Abdullah · Ammar" />
      </div>

      <Card style={{ marginBottom: 16 }}>
        <SectionTitle title="Monthly spend — Amazon vs iHerb" sub="Combined procurement cost per month (USD)" />
        <Legend items={[{ label: 'Amazon', color: AMZ }, { label: 'iHerb', color: IHR }]} />
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={MONTHLY} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="month" tick={{ fontSize: 11, fill: 'var(--text2)' }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: 'var(--text2)' }} axisLine={false} tickLine={false} tickFormatter={v => '$' + (v/1000).toFixed(0) + 'k'} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="amazon" name="Amazon" fill={AMZ} radius={[4,4,0,0]} />
            <Bar dataKey="iherb"  name="iHerb"  fill={IHR} radius={[4,4,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <Card>
          <SectionTitle title="Spend by source" sub="Amazon vs iHerb share" />
          <Legend items={[{ label: `Amazon 92.5%`, color: AMZ }, { label: `iHerb 7.5%`, color: IHR }]} />
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" innerRadius={55} outerRadius={85} dataKey="value" paddingAngle={2}>
                <Cell fill={AMZ} />
                <Cell fill={IHR} />
              </Pie>
              <Tooltip formatter={(v) => fmt.usd(v)} />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <SectionTitle title="Monthly discount savings" sub="Total savings captured per month" />
          <Legend items={[{ label: 'Discounts saved', color: BLUE }]} />
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={discData} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: 'var(--text2)' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: 'var(--text2)' }} axisLine={false} tickLine={false} tickFormatter={v => '$' + v} />
              <Tooltip formatter={(v) => fmt.usd(v)} />
              <Line type="monotone" dataKey="Savings" stroke={BLUE} strokeWidth={2.5} dot={{ r: 4, fill: BLUE }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  )
}
