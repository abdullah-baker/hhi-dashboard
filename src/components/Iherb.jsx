import React from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts'
import { Card, KPI, SectionTitle, Table, Td, Tag, Legend, fmt } from './ui'
import { SUMMARY, IHR_CATEGORIES, IHERB_ORDERS } from '../data'

const IHR = '#2d8a4e'
const IHR2 = '#5daa72'

const CAT_COLOR = {
  Probiotics: 'blue', Vitamins: 'blue', 'Vitamin C': 'blue',
  Multivitamins: 'green', Collagen: 'orange', Food: 'amber',
  Magnesium: 'purple', Household: 'gray',
}

const MONTHLY_IHR = [
  { month: 'Jan', Spend: 107.01, Discounts: 0 },
  { month: 'Feb', Spend: 290.14, Discounts: 27.49 },
  { month: 'Mar', Spend: 585.79, Discounts: 95.95 },
  { month: 'Apr', Spend: 168.07, Discounts: 11.52 },
]

export default function Iherb() {
  const s = SUMMARY.iherb

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(130px,1fr))', gap: 10, marginBottom: 20 }}>
        <KPI label="Total Spend" value={fmt.usd(s.totalSpend)} sub="7 orders" />
        <KPI label="Discounts" value={fmt.usd(s.totalDiscounts)} badge={fmt.pct(s.discountRate) + ' rate'} badgeColor={{ bg: '#dcfce7', text: '#16a34a' }} />
        <KPI label="Units" value={fmt.num(s.units)} sub={s.uniqueSkus + ' unique SKUs'} />
        <KPI label="Avg Order" value={fmt.usd(s.avgOrder)} sub="Bulk orders" />
        <KPI label="Avg Unit Price" value={'$' + s.avgUnitPrice} badge="vs $24.2 Amazon" badgeColor={{ bg: '#dcfce7', text: '#16a34a' }} />
        <KPI label="Cancellations" value="0" badge="0% rate" badgeColor={{ bg: '#dcfce7', text: '#16a34a' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
        <Card>
          <SectionTitle title="Spend by category" sub="iHerb — 7 orders breakdown" />
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={IHR_CATEGORIES} layout="vertical" margin={{ top: 0, right: 12, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" horizontal={false} />
              <XAxis type="number" tick={{ fontSize: 10, fill: 'var(--text2)' }} axisLine={false} tickLine={false} tickFormatter={v => '$' + v} />
              <YAxis dataKey="name" type="category" tick={{ fontSize: 11, fill: 'var(--text2)' }} axisLine={false} tickLine={false} width={100} />
              <Tooltip formatter={v => fmt.usd(v)} />
              <Bar dataKey="spend" name="Spend" fill={IHR} radius={[0,4,4,0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <SectionTitle title="Monthly spend + discounts" sub="iHerb — Jan to Apr 2026" />
          <Legend items={[{ label: 'Spend', color: IHR }, { label: 'Discounts', color: IHR2 }]} />
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={MONTHLY_IHR} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: 'var(--text2)' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: 'var(--text2)' }} axisLine={false} tickLine={false} tickFormatter={v => '$' + v} />
              <Tooltip formatter={v => fmt.usd(v)} />
              <Bar dataKey="Spend" fill={IHR} radius={[4,4,0,0]} />
              <Bar dataKey="Discounts" fill={IHR2} radius={[4,4,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Card>
        <SectionTitle title="All iHerb orders — line items" sub="26 line items across 7 orders" />
        <Table
          headers={['Date', 'Order #', 'Product', 'Category', 'Qty', 'Subtotal', 'Discount']}
          rows={IHERB_ORDERS}
          renderRow={(row) => [
            <Td key="date" style={{ color: 'var(--text2)', whiteSpace: 'nowrap' }}>{row.date}</Td>,
            <Td key="order" style={{ color: 'var(--text3)', fontFamily: 'monospace', fontSize: 11 }}>{row.order}</Td>,
            <Td key="prod">{row.product}</Td>,
            <Td key="cat"><Tag color={CAT_COLOR[row.category] || 'gray'}>{row.category}</Tag></Td>,
            <Td key="qty" align="center">{row.qty}</Td>,
            <Td key="sub" align="right" style={{ fontWeight: 600 }}>{fmt.usd2(row.subtotal)}</Td>,
            <Td key="disc" align="right" style={{ color: row.discount > 0 ? '#16a34a' : 'var(--text3)' }}>
              {row.discount > 0 ? '-' + fmt.usd2(row.discount) : '—'}
            </Td>,
          ]}
        />
      </Card>
    </div>
  )
}
