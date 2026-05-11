export const SUMMARY = {
  amazon: {
    totalSpend: 14179.11,
    totalDiscounts: 1042.23,
    orders: 229,
    units: 585,
    uniqueSkus: 128,
    closed: 210,
    cancelled: 18,
    avgOrder: 61.9,
    avgUnitPrice: 24.2,
    discountRate: 7.3,
    cancellationRate: 8.5,
    returnRate: 0.9,
  },
  iherb: {
    totalSpend: 1151.01,
    totalDiscounts: 134.96,
    orders: 7,
    units: 66,
    uniqueSkus: 17,
    avgOrder: 164.4,
    avgUnitPrice: 17.5,
    discountRate: 11.7,
    cancellationRate: 0,
  },
}

export const MONTHLY = [
  { month: 'Jan', amazon: 456.89,  iherb: 107.01, amzDisc: 0,      ihDisc: 0 },
  { month: 'Feb', amazon: 1369.67, iherb: 290.14, amzDisc: 35.18,  ihDisc: 27.49 },
  { month: 'Mar', amazon: 2544.44, iherb: 585.79, amzDisc: 176.61, ihDisc: 95.95 },
  { month: 'Apr', amazon: 6864.79, iherb: 168.07, amzDisc: 488.22, ihDisc: 11.52 },
  { month: 'May', amazon: 2943.32, iherb: 0,      amzDisc: 342.22, ihDisc: 0 },
]

export const AMZ_CATEGORIES = [
  { name: 'Collagen',       spend: 6107, discount: 678 },
  { name: 'Vitamin D',      spend: 1006, discount: 112 },
  { name: 'Multivitamins',  spend: 555,  discount: 62 },
  { name: 'Omega-3',        spend: 424,  discount: 47 },
  { name: 'Vitamin C',      spend: 402,  discount: 45 },
  { name: 'B-Vitamins',     spend: 304,  discount: 34 },
  { name: 'Probiotics',     spend: 204,  discount: 23 },
  { name: 'Ashwagandha',    spend: 198,  discount: 22 },
  { name: 'Other',          spend: 979,  discount: 19 },
]

export const IHR_CATEGORIES = [
  { name: 'Multivitamins',      spend: 351.56, discount: 87.89 },
  { name: 'Vitamins & Supp',    spend: 309.22, discount: 7.10  },
  { name: 'Vitamin C',          spend: 260.13, discount: 33.45 },
  { name: 'Probiotics',         spend: 76.32,  discount: 17.13 },
  { name: 'Collagen',           spend: 74.86,  discount: 16.08 },
  { name: 'Food & Grocery',     spend: 66.66,  discount: 0     },
  { name: 'Magnesium',          spend: 8.30,   discount: 0.92  },
  { name: 'Household',          spend: 3.96,   discount: 0     },
]

export const DOW = [
  { day: 'Mon', orders: 11, spend: 137.56 },
  { day: 'Tue', orders: 26, spend: 461.13 },
  { day: 'Wed', orders: 9,  spend: 435.54 },
  { day: 'Thu', orders: 22, spend: 810.57 },
  { day: 'Fri', orders: 59, spend: 3828.50 },
  { day: 'Sat', orders: 4,  spend: 248.55 },
  { day: 'Sun', orders: 17, spend: 772.15 },
]

export const TOP_PRODUCTS = [
  { rank:1,  name: 'Vital Proteins Marine Collagen 7.8oz',        orders:8,  units:53, spend:1139, discount:127 },
  { rank:2,  name: "MaryRuth's Liquid Multivitamin 15.22oz",      orders:17, units:17, spend:679,  discount:0   },
  { rank:3,  name: 'Nature Target Marine Collagen Powder',        orders:6,  units:24, spend:574,  discount:64  },
  { rank:4,  name: 'Garden of Life Collagen Peptides',            orders:5,  units:20, spend:480,  discount:53  },
  { rank:5,  name: 'Vital Proteins Collagen Peptides 10oz',       orders:4,  units:16, spend:384,  discount:43  },
  { rank:6,  name: 'Nordic Naturals Ultimate Omega-3',            orders:5,  units:15, spend:375,  discount:42  },
  { rank:7,  name: 'Thorne Vitamin D/K2 60ct',                    orders:4,  units:40, spend:360,  discount:40  },
  { rank:8,  name: 'Pure Encapsulations B-Complex Plus',          orders:3,  units:12, spend:288,  discount:32  },
  { rank:9,  name: 'Garden of Life Vitamin C Raw 120ct',          orders:3,  units:9,  spend:269,  discount:30  },
  { rank:10, name: 'Jarrow Formulas Glutathione 500mg',           orders:3,  units:9,  spend:243,  discount:27  },
]

export const IHERB_ORDERS = [
  { date:'Jan 20', order:'941302855', product:'LactoBif 30 Probiotics 120cap',        category:'Probiotics',   qty:1,  subtotal:36.39,  discount:0 },
  { date:'Jan 20', order:'941302855', product:'Organic Ghee 15oz × 2',                category:'Food',         qty:2,  subtotal:42.14,  discount:0 },
  { date:'Jan 20', order:'941302855', product:'YumEarth Organic Pops',                category:'Food',         qty:1,  subtotal:9.93,   discount:0 },
  { date:'Jan 20', order:'941302855', product:'Chia Seeds 12oz',                      category:'Food',         qty:1,  subtotal:6.29,   discount:0 },
  { date:'Jan 20', order:'941302855', product:'Apple Cider Vinegar 16fl oz',          category:'Food',         qty:1,  subtotal:8.30,   discount:0 },
  { date:'Feb 25', order:'942178247', product:'Folinic Acid 1fl oz × 10',             category:'Vitamins',     qty:10, subtotal:121.80, discount:0 },
  { date:'Feb 27', order:'942243873', product:"MaryRuth's Multivitamin 15oz",         category:'Multivitamins',qty:1,  subtotal:31.96,  discount:7.99 },
  { date:'Feb 27', order:'942243873', product:'MegaFood Complex C 180tab',            category:'Vitamin C',    qty:1,  subtotal:44.79,  discount:11.20 },
  { date:'Feb 27', order:'942243873', product:'MegaFood Complex C 30tab × 2',         category:'Vitamin C',    qty:2,  subtotal:24.78,  discount:6.20 },
  { date:'Feb 27', order:'942243873', product:'NOW Foods Pumpkin Seed Oil 100sg',     category:'Vitamins',     qty:1,  subtotal:12.24,  discount:0 },
  { date:'Feb 27', order:'942243873', product:'Life Extension Selenium + Vit E',      category:'Vitamins',     qty:1,  subtotal:8.40,   discount:2.10 },
  { date:'Feb 27', order:'942243873', product:'Garden of Life Vitamin C 60cap × 3',  category:'Vitamin C',    qty:3,  subtotal:46.17,  discount:0 },
  { date:'Mar 02', order:'942342482', product:"MaryRuth's Multivitamin × 10",         category:'Multivitamins',qty:10, subtotal:319.60, discount:79.90 },
  { date:'Mar 07', order:'942449358', product:'Folinic Acid 1fl oz × 10',             category:'Vitamins',     qty:10, subtotal:121.80, discount:0 },
  { date:'Mar 19', order:'942762424', product:'MegaFood Complex C 30tab × 2',         category:'Vitamin C',    qty:2,  subtotal:27.88,  discount:3.10 },
  { date:'Mar 19', order:'942762424', product:'MegaFood Complex C 60tab',             category:'Vitamin C',    qty:1,  subtotal:23.39,  discount:2.60 },
  { date:'Mar 19', order:'942762424', product:'BioSchwartz Vitamin C × 3',            category:'Vitamin C',    qty:3,  subtotal:37.72,  discount:4.19 },
  { date:'Mar 19', order:'942762424', product:'Garden of Life Vitamin C × 4',         category:'Vitamin C',    qty:4,  subtotal:55.40,  discount:6.16 },
  { date:'Apr 22', order:'943611004', product:'CGN Magnesium Bisglycinate 60cap',     category:'Magnesium',    qty:1,  subtotal:8.30,   discount:0.92 },
  { date:'Apr 22', order:'943611004', product:'Ancient Nutrition Multi Collagen × 2', category:'Collagen',     qty:2,  subtotal:50.42,  discount:5.60 },
  { date:'Apr 22', order:'943611004', product:'CGN LactoBif 30 60cap',                category:'Probiotics',   qty:1,  subtotal:15.64,  discount:6.71 },
  { date:'Apr 22', order:'943611004', product:'CGN LactoBif 5 60cap',                 category:'Probiotics',   qty:1,  subtotal:6.82,   discount:2.93 },
  { date:'Apr 22', order:'943611004', product:'CGN LactoBif 65 30cap',                category:'Probiotics',   qty:1,  subtotal:17.47,  discount:7.49 },
  { date:'Apr 22', order:'943611004', product:'CGN CollagenUP Marine × 2',            category:'Collagen',     qty:2,  subtotal:24.44,  discount:10.48 },
  { date:'Apr 22', order:'943611004', product:'Fairhaven Inositol 120cap × 2',        category:'Vitamins',     qty:2,  subtotal:44.98,  discount:5.00 },
]

export const INSIGHTS = [
  {
    icon: '📈',
    color: '#16a34a',
    title: 'Explosive 15x growth in 4 months',
    text: 'Spend jumped from $457 (Jan) to $7,033 (Apr). Annual procurement run-rate ≈ $84,000/year. Ensure Iraqi customs clearance scales.',
    action: 'How should I manage cash flow with this growth rate?',
  },
  {
    icon: '🏆',
    color: '#ea580c',
    title: 'Collagen = 43% of Amazon spend ($6,107)',
    text: 'Vital Proteins Marine Collagen alone: 53 units across 8 orders. Your #1 product — never let it go out of stock.',
    action: 'What collagen products should I prioritize for Holistic Health Iraq?',
  },
  {
    icon: '🏷️',
    color: '#2563eb',
    title: 'iHerb discount rate 60% better than Amazon',
    text: '11.7% on iHerb vs 7.3% on Amazon. For Vitamin C and Probiotics, iHerb is clearly the better channel.',
    action: 'Which products should I switch from Amazon to iHerb?',
  },
  {
    icon: '📅',
    color: '#7c3aed',
    title: 'Friday is your biggest shopping day (27%)',
    text: '$3,828 spent on Fridays across 59 orders. Schedule bulk orders Thursday evening for best availability.',
    action: 'What is the best ordering schedule for my business?',
  },
  {
    icon: '⚠️',
    color: '#dc2626',
    title: '8.5% cancellation rate needs attention',
    text: '18 cancelled orders mostly in Jan–Mar. Consider Subscribe & Save for core SKUs to avoid stock-outs.',
    action: 'How can I reduce my Amazon cancellation rate?',
  },
  {
    icon: '💡',
    color: '#d97706',
    title: 'Split sourcing by category saves ~$200/month',
    text: 'Amazon: Collagen, Omega-3, Vitamin D. iHerb: Vitamin C, Probiotics, Magnesium. Lower unit price on iHerb.',
    action: 'Give me a complete sourcing strategy for Holistic Health Iraq',
  },
]
