import React from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts'
import { Card, SectionTitle, Legend, fmt } from './ui'
import { SUMMARY } from '../data'

const AMZ = '#ff9900'
const IHR = '#2d8a4e'

const MetricRow = ({ label, amzVal, ihrVal, winner }) => (
  <div style={{
    display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
    padding: '10px 0', borderBottom: '1px solid var(--border)',
    fontSize: 13, alignItems: 'center',
  }}>
    <div style={{ color: 'var(--text2)', fontWeight: 500 }}>{label}</div>
    <div style={{ textAlign: 'center', fontWeight: winner === 'amz' ? 700 : 400, color: winner === 'amz' ? AMZ : 'var(--text)' }}>
      {amzVal} {winner === 'amz' && <span style={{ fontSize: 10, background: '#fff3cd', color: '#92400e', padding: '1px 6px', borderRadius: 20 }}>✓</span>}
    </div>
    <div style={{ textAlign: 'center', fontWeight: winner === 'ihr' ? 700 : 400, color: winner === 'ihr' ? IHR : 'var(--text)' }}>
      {ihrVal} {winner === 'ihr' && <span style={{ fontSize: 10, background: '#dcfce7', color: '#166534', padding: '1px 6px', borderRadius: 20 }}>✓</span>}
    </div>
  </div>
)

const cmpData = [
  { metric: 'Spend ($)',    Amazon: 14179, iHerb: 1151  },
  { metric: 'Discounts ($)',Amazon: 1042,  iHerb: 135   },
]
const unitData = [
  { name: 'Amazon', price: 24.2 },
  { name: 'iHerb',  price: 17.5 },
]

const SOURCING = [
  { category: 'Collagen',      winner: 'amz', reason: 'Vital Proteins, Nature Target — better variety + bulk pricing' },
  { category: 'Omega-3',       winner: 'amz', reason: 'Nordic Naturals available, competitive pricing' },
  { category: 'Vitamin D',     winner: 'amz', reason: 'Thorne D/K2 — wide selection' },
  { category: 'Vitamin C',     winner: 'ihr', reason: 'MegaFood, Garden of Life — better price + promo codes' },
  { category: 'Probiotics',    winner: 'ihr', reason: 'CGN LactoBif exclusive — significantly cheaper' },
  { category: 'Multivitamins', winner: 'ihr', reason: "MaryRuth's with 20% promo = best unit economics" },
  { category: 'Magnesium',     winner: 'ihr', reason: 'CGN Bisglycinate Chelate — lower unit price' },
  { category: 'Folinic Acid',  winner: 'ihr', reason: 'Only available on iHerb (CGN exclusive)' },
]

export default function Compare() {
  return (
    <div>
      <Card style={{ marginBottom: 14 }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
          marginBottom: 10, borderBottom: '2px solid var(--border)', paddingBottom: 10,
        }}>
          <div style={{ color: 'var(--text3)', fontSize: 12, fontWeight: 600 }}>METRIC</div>
          <div style={{ textAlign: 'center', fontWeight: 700, fontSize: 14, color: AMZ }}>🛒 Amazon</div>
          <div style={{ textAlign: 'center', fontWeight: 700, fontSize: 14, color: IHR }}>🌿 iHerb</div>
        </div>
        <MetricRow label="Total Spend" amzVal={fmt.usd(14179)} ihrVal={fmt.usd(1151)} winner="amz" />
        <MetricRow label="Total Discounts" amzVal={fmt.usd(1042)} ihrVal={fmt.usd(135)} />
        <MetricRow label="Discount Rate" amzVal="7.3%" ihrVal="11.7%" winner="ihr" />
        <MetricRow label="# of Orders" amzVal="229" ihrVal="7" winner="amz" />
        <MetricRow label="# of Units" amzVal="585" ihrVal="66" winner="amz" />
        <MetricRow label="Avg Unit Price" amzVal="$24.2" ihrVal="$17.5" winner="ihr" />
        <MetricRow label="Avg Order Value" amzVal="$61.9" ihrVal="$164" winner="amz" />
        <MetricRow label="Unique SKUs" amzVal="128" ihrVal="17" winner="amz" />
        <MetricRow label="Cancellation Rate" amzVal="8.5%" ihrVal="0%" winner="ihr" />
        <MetricRow label="Return Policy" amzVal="30 days" ihrVal="30–90 days" winner="ihr" />
      </Card>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
        <Card>
          <SectionTitle title="Spend + discounts comparison" sub="Total amounts USD" />
          <Legend items={[{ label: 'Amazon', color: AMZ }, { label: 'iHerb', color: IHR }]} />
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={cmpData} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="metric" tick={{ fontSize: 11, fill: 'var(--text2)' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: 'var(--text2)' }} axisLine={false} tickLine={false} tickFormatter={v => '$' + v.toLocaleString()} />
              <Tooltip formatter={v => fmt.usd(v)} />
              <Bar dataKey="Amazon" fill={AMZ} radius={[4,4,0,0]} />
              <Bar dataKey="iHerb"  fill={IHR} radius={[4,4,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <SectionTitle title="Average unit price" sub="iHerb is 28% cheaper per unit" />
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={unitData} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="name" tick={{ fontSize: 13, fill: 'var(--text2)' }} axisLine={false} tickLine={false} />
              <YAxis domain={[0, 30]} tick={{ fontSize: 11, fill: 'var(--text2)' }} axisLine={false} tickLine={false} tickFormatter={v => '$' + v} />
              <Tooltip formatter={v => '$' + v} />
              <Bar dataKey="price" name="$/unit" radius={[6,6,0,0]} barSize={70}>
                {unitData.map((d, i) => <cell key={i} fill={i === 0 ? AMZ : IHR} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Card>
        <SectionTitle title="Sourcing recommendation — by category" sub="Where to buy each product type for best unit economics" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {SOURCING.map((row, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '140px 90px 1fr',
              padding: '10px 0', borderBottom: i < SOURCING.length - 1 ? '1px solid var(--border)' : 'none',
              alignItems: 'center', gap: 12, fontSize: 13,
            }}>
              <div style={{ fontWeight: 600 }}>{row.category}</div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 5,
                background: row.winner === 'ihr' ? '#dcfce7' : '#fff3cd',
                color: row.winner === 'ihr' ? '#166534' : '#92400e',
                padding: '3px 10px', borderRadius: 20, fontWeight: 600, fontSize: 12,
              }}>
                {row.winner === 'ihr' ? '🌿 iHerb' : '🛒 Amazon'}
              </div>
              <div style={{ color: 'var(--text2)', fontSize: 12 }}>{row.reason}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
