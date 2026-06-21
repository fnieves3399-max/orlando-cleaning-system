/* Mock data for the Orlando Cleaning Growth System app UI kit. */
window.OCGSData = {
  stats: {
    leadsTotal: 312, leadsWeek: 14, pendingQuotes: 7, bookedJobs: 23,
    completedJobs: 188, revenueMonth: 18240, expensesMonth: 12364,
    profit: 5876, payouts: 10944, margin: 32,
  },
  leads: [
    { id: 'L-1042', name: 'Maria Lopez', city: 'Winter Park', type: 'Recurring', source: 'Landing page', status: 'booked', quote: 240, created: 'Jun 18' },
    { id: 'L-1041', name: 'James Carter', city: 'Lake Nona', type: 'Deep clean', source: 'Google', status: 'quoted', quote: 310, created: 'Jun 18' },
    { id: 'L-1040', name: 'Sunset Stays Airbnb', city: 'Kissimmee', type: 'Turnover', source: 'Referral', status: 'active', quote: 165, created: 'Jun 17' },
    { id: 'L-1039', name: 'Dana Whitfield', city: 'Windermere', type: 'Move-out', source: 'Facebook', status: 'new lead', quote: 0, created: 'Jun 17' },
    { id: 'L-1038', name: 'Priya Nair', city: 'Clermont', type: 'Standard', source: 'Landing page', status: 'quoted', quote: 145, created: 'Jun 16' },
    { id: 'L-1037', name: 'Robert Hughes', city: 'Orlando', type: 'Post-construction', source: 'Google', status: 'lost', quote: 0, created: 'Jun 15' },
    { id: 'L-1036', name: 'Aisha Bell', city: 'Winter Park', type: 'Recurring', source: 'Referral', status: 'active', quote: 220, created: 'Jun 14' },
    { id: 'L-1035', name: 'Tom & Lily Reed', city: 'Lake Nona', type: 'Deep clean', source: 'Instagram', status: 'booked', quote: 295, created: 'Jun 13' },
  ],
  jobs: [
    { id: 'J-508', customer: 'Maria Lopez', address: '418 Aloma Ave, Winter Park', type: 'Recurring', date: 'Sat Jun 21', time: '9:00 AM', sub: 'James C.', price: 240, payout: 144, status: 'scheduled' },
    { id: 'J-507', customer: 'Sunset Stays Airbnb', address: '92 Celebration Blvd, Kissimmee', type: 'Turnover', date: 'Sat Jun 21', time: '11:30 AM', sub: 'Brenda M.', price: 165, payout: 99, status: 'scheduled' },
    { id: 'J-506', customer: 'Tom & Lily Reed', address: '7 Tavistock Lakes, Lake Nona', type: 'Deep clean', date: 'Fri Jun 20', time: '1:00 PM', sub: 'James C.', price: 295, payout: 177, status: 'in progress' },
    { id: 'J-505', customer: 'Aisha Bell', address: '210 Park Ave N, Winter Park', type: 'Recurring', date: 'Thu Jun 19', time: '10:00 AM', sub: 'Carlos R.', price: 220, payout: 132, status: 'completed' },
    { id: 'J-504', customer: 'Priya Nair', address: '55 Lakeshore Dr, Clermont', type: 'Standard', date: 'Wed Jun 18', time: '2:00 PM', sub: 'Brenda M.', price: 145, payout: 87, status: 'completed' },
  ],
  subs: [
    { id: 'S-1', name: 'James Carter', area: 'Winter Park · Lake Nona', rate: '60%', jobs: 142, rating: 4.9, status: 'active' },
    { id: 'S-2', name: 'Brenda Mendez', area: 'Kissimmee · Clermont', rate: '60%', jobs: 98, rating: 4.8, status: 'active' },
    { id: 'S-3', name: 'Carlos Rivera', area: 'Orlando · Windermere', rate: '55%', jobs: 64, rating: 4.7, status: 'active' },
    { id: 'S-4', name: 'Tina Okafor', area: 'Lake Nona', rate: '60%', jobs: 31, rating: 4.9, status: 'inactive' },
  ],
  revenueByService: [
    { label: 'Recurring', value: 38 }, { label: 'Deep clean', value: 26 },
    { label: 'Move-out', value: 18 }, { label: 'Airbnb turnover', value: 12 }, { label: 'Post-construction', value: 6 },
  ],
  monthly: [
    { m: 'Jan', v: 9200 }, { m: 'Feb', v: 10400 }, { m: 'Mar', v: 12100 },
    { m: 'Apr', v: 13800 }, { m: 'May', v: 15600 }, { m: 'Jun', v: 18240 },
  ],
  avatars: ['Busy working mom', 'Airbnb host', 'Realtor', 'Property manager', 'Elderly homeowner', 'High-income homeowner', 'Move-out customer', 'New homeowner'],
};
