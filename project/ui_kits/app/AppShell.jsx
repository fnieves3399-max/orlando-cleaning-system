/* App shell: navy sidebar + topbar. Exposes window.OCGSShell. */
(function () {
  const NS = window.OrlandoCleaningGrowthSystemDesignSystem_e087c1;
  const { Logo, Button, Avatar } = NS;
  const I = window.OCGSIcons;

  const NAV = [
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
    { id: 'crm', label: 'Leads & CRM', icon: 'users' },
    { id: 'quote', label: 'Quote calculator', icon: 'calculator' },
    { id: 'jobs', label: 'Jobs', icon: 'calendar' },
    { id: 'subs', label: 'Subcontractors', icon: 'briefcase' },
    { id: 'finance', label: 'Financials', icon: 'dollar' },
    { id: 'marketing', label: 'Marketing studio', icon: 'megaphone' },
    { id: 'seo', label: 'Local SEO', icon: 'map' },
  ];

  function Sidebar({ active, onNavigate }) {
    return (
      <aside style={{
        width: 'var(--sidebar-width)', flexShrink: 0, background: 'var(--navy-900)',
        display: 'flex', flexDirection: 'column', height: '100%',
        position: 'sticky', top: 0,
      }}>
        <div style={{ padding: '20px 20px 18px' }}>
          <Logo variant="full" size={24} tone="light" />
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 2, padding: '6px 12px', flex: 1 }}>
          {NAV.map((n) => {
            const on = active === n.id;
            const Ico = I[n.icon];
            return (
              <button key={n.id} onClick={() => onNavigate(n.id)} style={{
                display: 'flex', alignItems: 'center', gap: 11, padding: '9px 12px',
                border: 'none', borderRadius: 'var(--radius-md)', cursor: 'pointer', textAlign: 'left',
                background: on ? 'rgba(86,176,232,0.16)' : 'transparent',
                color: on ? '#fff' : 'var(--text-on-navy)',
                fontFamily: 'var(--font-display)', fontSize: 'var(--text-md)', fontWeight: on ? 700 : 500,
                transition: 'background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)',
              }}
              onMouseEnter={(e) => { if (!on) e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
              onMouseLeave={(e) => { if (!on) e.currentTarget.style.background = 'transparent'; }}>
                <span style={{ color: on ? 'var(--brand-300)' : 'var(--gray-400)', display: 'inline-flex' }}><Ico size={19} /></span>
                {n.label}
              </button>
            );
          })}
        </nav>
        <div style={{ padding: '14px 16px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: 10 }}>
          <Avatar name="Owner" size="sm" />
          <div style={{ lineHeight: 1.25 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-sm)', fontWeight: 600, color: '#fff' }}>Diana Reyes</div>
            <div style={{ fontSize: 'var(--text-2xs)', color: 'var(--gray-400)' }}>Owner · Orlando, FL</div>
          </div>
        </div>
      </aside>
    );
  }

  function Topbar({ title, subtitle, onNewLead }) {
    const Search = I.search, Bell = I.bell, Plus = I.plus;
    return (
      <header style={{
        height: 'var(--topbar-height)', flexShrink: 0, display: 'flex', alignItems: 'center',
        gap: 'var(--space-5)', padding: '0 var(--space-7)', background: 'var(--surface-card)',
        borderBottom: '1px solid var(--border)', position: 'sticky', top: 0, zIndex: 5,
      }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: 800, color: 'var(--navy-900)', letterSpacing: '-0.01em', lineHeight: 1.1 }}>{title}</div>
          {subtitle && <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{subtitle}</div>}
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8, height: 38, padding: '0 12px', width: 240,
          background: 'var(--gray-50)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', color: 'var(--text-muted)',
        }}>
          <Search size={17} />
          <span style={{ fontSize: 'var(--text-sm)' }}>Search leads, jobs…</span>
        </div>
        <button style={{ position: 'relative', width: 38, height: 38, borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', background: 'var(--surface-card)', color: 'var(--gray-600)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          <Bell size={18} />
          <span style={{ position: 'absolute', top: 8, right: 9, width: 7, height: 7, background: 'var(--red-500)', borderRadius: '50%', border: '1.5px solid #fff' }} />
        </button>
        <Button variant="primary" leadingIcon={<Plus size={17} />} onClick={onNewLead}>Add lead</Button>
      </header>
    );
  }

  window.OCGSShell = { Sidebar, Topbar, NAV };
})();
