/* Dashboard screen. window.OCGSScreens.Dashboard */
(function () {
  const NS = window.OrlandoCleaningGrowthSystemDesignSystem_e087c1;
  const { StatCard, Card, CardHeader, Table, Badge, Meter, Button } = NS;
  const I = window.OCGSIcons;
  const D = window.OCGSData;
  const money = (n) => '$' + n.toLocaleString('en-US');

  function MiniBars() {
    const max = Math.max(...D.monthly.map((d) => d.v));
    return (
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 14, height: 150, padding: '8px 4px 0' }}>
        {D.monthly.map((d, i) => {
          const last = i === D.monthly.length - 1;
          return (
            <div key={d.m} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <div style={{ fontSize: 'var(--text-2xs)', fontWeight: 700, color: last ? 'var(--green-700)' : 'var(--text-faint)', fontVariantNumeric: 'tabular-nums' }}>{(d.v / 1000).toFixed(1)}k</div>
              <div style={{ width: '100%', height: `${(d.v / max) * 110}px`, borderRadius: '6px 6px 0 0',
                background: last ? 'var(--green-500)' : 'var(--brand-200)' }} />
              <div style={{ fontSize: 'var(--text-2xs)', color: 'var(--text-muted)', fontWeight: 600 }}>{d.m}</div>
            </div>
          );
        })}
      </div>
    );
  }

  function Dashboard() {
    const s = D.stats;
    const upcoming = D.jobs.filter((j) => j.status !== 'completed');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-4)' }}>
          <StatCard label="Revenue this month" value={money(s.revenueMonth)} delta="+12%" trend="up" tone="success" icon={<I.dollar size={18} />} />
          <StatCard label="New leads this week" value={s.leadsWeek} delta="+5" trend="up" tone="brand" icon={<I.users size={18} />} />
          <StatCard label="Pending quotes" value={s.pendingQuotes} tone="warning" icon={<I.calculator size={18} />} hint="3 awaiting follow-up" />
          <StatCard label="Estimated profit" value={money(s.profit)} delta="+8%" trend="up" tone="navy" icon={<I.trendingUp size={18} />} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 'var(--space-6)', alignItems: 'start' }}>
          <Card>
            <CardHeader title="Monthly revenue" subtitle="Last 6 months" action={<Badge tone="success" dot>Trending up</Badge>} />
            <MiniBars />
          </Card>
          <Card>
            <CardHeader title="Revenue by service" subtitle="Share of this month" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {D.revenueByService.map((r, i) => (
                <Meter key={r.label} value={r.value} valueLabel={r.value + '%'} label={r.label}
                  tone={['success', 'brand', 'navy', 'warning', 'navy'][i]} />
              ))}
            </div>
          </Card>
        </div>

        <Card padding="none">
          <div style={{ padding: 'var(--space-5) var(--space-6) 0' }}>
            <CardHeader title="Upcoming jobs" subtitle={`${upcoming.length} scheduled`} action={<Button variant="ghost" size="sm" trailingIcon={<I.arrowRight size={15} />}>View calendar</Button>} />
          </div>
          <Table
            style={{ border: 'none', borderRadius: 0, boxShadow: 'none' }}
            columns={[
              { key: 'date', header: 'When', render: (v, r) => (<div><div style={{ fontWeight: 600, color: 'var(--navy-900)' }}>{v}</div><div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{r.time}</div></div>) },
              { key: 'customer', header: 'Customer' },
              { key: 'type', header: 'Service' },
              { key: 'sub', header: 'Subcontractor' },
              { key: 'price', header: 'Price', align: 'right', render: (v) => <span style={{ fontVariantNumeric: 'tabular-nums', fontWeight: 600, color: 'var(--navy-900)' }}>{money(v)}</span> },
              { key: 'status', header: 'Status', render: (v) => <Badge status={v} /> },
            ]}
            rows={upcoming}
          />
        </Card>
      </div>
    );
  }

  window.OCGSScreens = window.OCGSScreens || {};
  window.OCGSScreens.Dashboard = Dashboard;
})();
