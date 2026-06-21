/* Jobs, Subcontractors, Financials screens. */
(function () {
  const NS = window.OrlandoCleaningGrowthSystemDesignSystem_e087c1;
  const { Card, CardHeader, Table, Badge, Button, Avatar, StatCard, Meter } = NS;
  const I = window.OCGSIcons;
  const D = window.OCGSData;
  const money = (n) => '$' + n.toLocaleString('en-US');

  function Jobs() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 'var(--space-4)' }}>
          <StatCard label="Scheduled" value="9" tone="brand" icon={<I.calendar size={18} />} />
          <StatCard label="In progress" value="2" tone="warning" icon={<I.clock size={18} />} />
          <StatCard label="Completed (Jun)" value="34" tone="success" icon={<I.check size={18} />} />
          <StatCard label="Contractor payouts" value={money(D.stats.payouts)} tone="navy" icon={<I.dollar size={18} />} />
        </div>
        <Card padding="none">
          <div style={{ padding: 'var(--space-5) var(--space-6) 0' }}>
            <CardHeader title="Job schedule" subtitle="This week" action={<Button variant="primary" size="sm" leadingIcon={<I.plus size={15} />}>New job</Button>} />
          </div>
          <Table
            style={{ border: 'none', borderRadius: 0, boxShadow: 'none' }}
            columns={[
              { key: 'date', header: 'When', render: (v, r) => (<div><div style={{ fontWeight: 600, color: 'var(--navy-900)' }}>{v}</div><div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{r.time}</div></div>) },
              { key: 'customer', header: 'Customer' },
              { key: 'address', header: 'Address', render: (v) => <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{v}</span> },
              { key: 'sub', header: 'Subcontractor', render: (v) => (<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Avatar name={v} size="xs" /><span>{v}</span></div>) },
              { key: 'price', header: 'Price', align: 'right', render: (v, r) => (<div style={{ textAlign: 'right' }}><div style={{ fontVariantNumeric: 'tabular-nums', fontWeight: 600, color: 'var(--navy-900)' }}>{money(v)}</div><div style={{ fontSize: 'var(--text-xs)', color: 'var(--green-600)' }}>payout {money(r.payout)}</div></div>) },
              { key: 'status', header: 'Status', render: (v) => <Badge status={v} /> },
            ]}
            rows={D.jobs}
          />
        </Card>
      </div>
    );
  }

  function Subs() {
    return (
      <Card padding="none">
        <div style={{ padding: 'var(--space-5) var(--space-6) 0' }}>
          <CardHeader title="Subcontractors" subtitle="4 in your network" action={<Button variant="primary" size="sm" leadingIcon={<I.plus size={15} />}>Add subcontractor</Button>} />
        </div>
        <Table
          style={{ border: 'none', borderRadius: 0, boxShadow: 'none' }}
          columns={[
            { key: 'name', header: 'Name', render: (v) => (<div style={{ display: 'flex', alignItems: 'center', gap: 10 }}><Avatar name={v} size="sm" /><span style={{ fontWeight: 600, color: 'var(--navy-900)' }}>{v}</span></div>) },
            { key: 'area', header: 'Service area' },
            { key: 'rate', header: 'Pay rate', align: 'center' },
            { key: 'jobs', header: 'Jobs', align: 'center', render: (v) => <span style={{ fontVariantNumeric: 'tabular-nums' }}>{v}</span> },
            { key: 'rating', header: 'Rating', align: 'center', render: (v) => (<span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, color: 'var(--amber-600)', fontWeight: 700 }}><I.sparkles size={14} />{v}</span>) },
            { key: 'status', header: 'Status', render: (v) => <Badge status={v} /> },
          ]}
          rows={D.subs}
        />
      </Card>
    );
  }

  function Finance() {
    const s = D.stats;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 'var(--space-4)' }}>
          <StatCard label="Revenue" value={money(s.revenueMonth)} tone="success" icon={<I.dollar size={18} />} delta="+12%" trend="up" />
          <StatCard label="Expenses" value={money(s.expensesMonth)} tone="navy" icon={<I.briefcase size={18} />} />
          <StatCard label="Net profit" value={money(s.profit)} tone="success" icon={<I.trendingUp size={18} />} />
          <StatCard label="Profit margin" value={s.margin + '%'} tone="brand" icon={<I.calculator size={18} />} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)', alignItems: 'start' }}>
          <Card>
            <CardHeader title="Expense breakdown" subtitle="June" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <Meter label="Contractor payouts" value={61} valueLabel={money(10944)} tone="navy" />
              <Meter label="Supplies" value={9} valueLabel={money(1620)} tone="brand" />
              <Meter label="Marketing spend" value={8} valueLabel={money(1420)} tone="warning" />
              <Meter label="Other" value={5} valueLabel={money(900)} tone="brand" />
            </div>
          </Card>
          <Card>
            <CardHeader title="Revenue by city" subtitle="June" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <Meter label="Winter Park" value={34} valueLabel={money(6200)} tone="success" />
              <Meter label="Lake Nona" value={27} valueLabel={money(4920)} tone="success" />
              <Meter label="Kissimmee" value={19} valueLabel={money(3460)} tone="success" />
              <Meter label="Windermere · Clermont" value={20} valueLabel={money(3660)} tone="success" />
            </div>
          </Card>
        </div>
      </div>
    );
  }

  window.OCGSScreens = window.OCGSScreens || {};
  Object.assign(window.OCGSScreens, { Jobs, Subs, Finance });
})();
