/* Leads & CRM screen with customer drawer. window.OCGSScreens.Crm */
(function () {
  const NS = window.OrlandoCleaningGrowthSystemDesignSystem_e087c1;
  const { Card, Table, Badge, Button, Avatar, Tabs, Tag, IconButton, Tabs: _T } = NS;
  const { Tabs: TabsC } = NS;
  const I = window.OCGSIcons;
  const D = window.OCGSData;
  const money = (n) => '$' + n.toLocaleString('en-US');

  function Drawer({ lead, onClose }) {
    const [tab, setTab] = React.useState('overview');
    if (!lead) return null;
    return (
      <div style={{ position: 'fixed', inset: 0, zIndex: 40, display: 'flex', justifyContent: 'flex-end' }}>
        <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(12,33,56,0.32)' }} />
        <div style={{ position: 'relative', width: 460, maxWidth: '92vw', height: '100%', background: 'var(--surface-card)', boxShadow: 'var(--shadow-xl)', display: 'flex', flexDirection: 'column', animation: 'slideIn .22s cubic-bezier(.22,1,.36,1)' }}>
          <style>{`@keyframes slideIn{from{transform:translateX(30px);opacity:.4}to{transform:none;opacity:1}}`}</style>
          <div style={{ padding: 'var(--space-6)', borderBottom: '1px solid var(--border)', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <Avatar name={lead.name} size="lg" />
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-xl)', color: 'var(--navy-900)' }}>{lead.name}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-muted)', fontSize: 'var(--text-sm)', marginTop: 3 }}>
                <I.mapPin size={14} /> {lead.city}, FL · {lead.type}
              </div>
              <div style={{ marginTop: 10 }}><Badge status={lead.status} dot /></div>
            </div>
            <button onClick={onClose} style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--text-muted)', fontSize: 22, lineHeight: 1, padding: 4 }}>×</button>
          </div>

          <div style={{ display: 'flex', gap: 10, padding: 'var(--space-4) var(--space-6)' }}>
            <Button variant="primary" size="sm" leadingIcon={<I.phone size={15} />}>Call</Button>
            <Button variant="secondary" size="sm" leadingIcon={<I.mail size={15} />}>Email</Button>
            <Button variant="success" size="sm" leadingIcon={<I.calendar size={15} />}>Book job</Button>
          </div>

          <div style={{ padding: '0 var(--space-6)' }}>
            <TabsC value={tab} onChange={setTab} tabs={[
              { id: 'overview', label: 'Overview' },
              { id: 'quotes', label: 'Quotes', count: lead.quote ? 1 : 0 },
              { id: 'jobs', label: 'Jobs', count: lead.status === 'active' || lead.status === 'booked' ? 2 : 0 },
              { id: 'notes', label: 'Notes' },
            ]} />
          </div>

          <div style={{ padding: 'var(--space-6)', overflowY: 'auto', flex: 1 }}>
            {tab === 'overview' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  {[['Total revenue', money(lead.quote * 3 || 0)], ['Lead source', lead.source], ['Customer type', lead.type], ['Created', lead.created]].map(([k, v]) => (
                    <div key={k}><div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.05em' }}>{k}</div><div style={{ fontSize: 'var(--text-md)', color: 'var(--navy-900)', fontWeight: 600, marginTop: 2 }}>{v}</div></div>
                  ))}
                </div>
                <div style={{ height: 1, background: 'var(--border)' }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--navy-900)', marginBottom: 8 }}>Follow-up reminder</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: 12, background: 'var(--amber-50)', border: '1px solid var(--amber-100)', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-sm)', color: 'var(--amber-600)', fontWeight: 600 }}>
                    <I.clock size={16} /> Call back before Fri Jun 20
                  </div>
                </div>
              </div>
            )}
            {tab === 'quotes' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {lead.quote ? (
                  <div style={{ padding: 16, border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ fontWeight: 700, color: 'var(--navy-900)', fontFamily: 'var(--font-display)' }}>{lead.type} cleaning</div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--navy-900)' }}>{money(lead.quote)}–{money(lead.quote + 60)}</span>
                    </div>
                    <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', marginTop: 4 }}>Sent {lead.created} · {lead.source}</div>
                  </div>
                ) : <div style={{ color: 'var(--text-muted)', fontSize: 'var(--text-sm)' }}>No quotes yet.</div>}
              </div>
            )}
            {tab === 'jobs' && <div style={{ color: 'var(--text-muted)', fontSize: 'var(--text-sm)' }}>Job history appears here once jobs are booked.</div>}
            {tab === 'notes' && <div style={{ color: 'var(--text-muted)', fontSize: 'var(--text-sm)' }}>“Prefers eco-friendly products. Two cats. Gate code 4417.”</div>}
          </div>
        </div>
      </div>
    );
  }

  function Crm() {
    const [tab, setTab] = React.useState('all');
    const [sel, setSel] = React.useState(null);
    const counts = D.leads.reduce((a, l) => { a[l.status] = (a[l.status] || 0) + 1; return a; }, {});
    const tabs = [
      { id: 'all', label: 'All', count: D.leads.length },
      { id: 'new lead', label: 'New', count: counts['new lead'] || 0 },
      { id: 'quoted', label: 'Quoted', count: counts['quoted'] || 0 },
      { id: 'booked', label: 'Booked', count: counts['booked'] || 0 },
      { id: 'active', label: 'Active', count: counts['active'] || 0 },
      { id: 'lost', label: 'Lost', count: counts['lost'] || 0 },
    ];
    const rows = tab === 'all' ? D.leads : D.leads.filter((l) => l.status === tab);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <TabsC value={tab} onChange={setTab} tabs={tabs} style={{ flex: 1 }} />
          <Button variant="secondary" size="sm" leadingIcon={<I.filter size={15} />}>Filter</Button>
        </div>
        <Table
          onRowClick={setSel}
          columns={[
            { key: 'name', header: 'Customer', render: (v) => (<div style={{ display: 'flex', alignItems: 'center', gap: 10 }}><Avatar name={v} size="sm" /><span style={{ fontWeight: 600, color: 'var(--navy-900)' }}>{v}</span></div>) },
            { key: 'city', header: 'City' },
            { key: 'type', header: 'Type' },
            { key: 'source', header: 'Source' },
            { key: 'quote', header: 'Quote', align: 'right', render: (v) => v ? <span style={{ fontVariantNumeric: 'tabular-nums', fontWeight: 600, color: 'var(--navy-900)' }}>{money(v)}</span> : <span style={{ color: 'var(--text-faint)' }}>—</span> },
            { key: 'status', header: 'Status', render: (v) => <Badge status={v} /> },
            { key: 'created', header: 'Created', align: 'right', render: (v) => <span style={{ color: 'var(--text-muted)', fontSize: 'var(--text-sm)' }}>{v}</span> },
          ]}
          rows={rows}
        />
        <Drawer lead={sel} onClose={() => setSel(null)} />
      </div>
    );
  }

  window.OCGSScreens = window.OCGSScreens || {};
  window.OCGSScreens.Crm = Crm;
})();
