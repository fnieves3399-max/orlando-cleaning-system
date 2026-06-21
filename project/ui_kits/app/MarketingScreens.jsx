/* Marketing studio + Local SEO screens. */
(function () {
  const NS = window.OrlandoCleaningGrowthSystemDesignSystem_e087c1;
  const { Card, CardHeader, Field, Select, Button, Badge, Tabs, Alert } = NS;
  const I = window.OCGSIcons;
  const D = window.OCGSData;

  const PLATFORMS = [
    { id: 'facebook', label: 'Facebook ad', icon: 'facebook' },
    { id: 'instagram', label: 'Instagram caption', icon: 'instagram' },
    { id: 'gbp', label: 'Google Business post', icon: 'mapPin' },
    { id: 'email', label: 'Email follow-up', icon: 'mail' },
    { id: 'sms', label: 'SMS', icon: 'phone' },
  ];

  const COPY = {
    facebook: (a, t) => `🧼 ${t} homeowners in Winter Park — your weekends are for relaxing, not scrubbing.\n\nOrlando Cleaning Growth System pairs you with a vetted local cleaner who treats your home like their own. Deep clean, recurring, or move-out — booked in 60 seconds.\n\n✅ Background-checked pros\n✅ Flat, upfront pricing\n✅ Satisfaction guaranteed\n\n👉 Get your instant quote today. First recurring clean 20% off.`,
    instagram: (a) => `That just-cleaned feeling, every week. ✨\nServing Winter Park, Lake Nona & Kissimmee. Tap the link for an instant quote — booked in under a minute. 🏡🫧\n\n#OrlandoCleaning #WinterParkFL #LakeNona #MaidService #CleanHomeHappyHome`,
    gbp: () => `New customers this month! 🎉 Now booking deep cleans and recurring service across the Orlando metro. Mention this post for 20% off your first recurring clean. Instant online quotes available — no waiting on a callback.`,
    email: (a) => `Hi {{first_name}},\n\nThanks for requesting a quote! Based on your home we estimated $240–$300 for a deep clean. We'd love to get you on the schedule this week.\n\nReply to this email or tap below to pick a time — your first recurring clean is 20% off.\n\n— Diana, Orlando Cleaning`,
    sms: () => `Hi {{first_name}}! It's Diana from Orlando Cleaning 🧼 Your deep-clean quote is ready: $240–$300. Want me to hold a Saturday slot? Reply YES and I'll lock it in.`,
  };

  function Marketing() {
    const [avatar, setAvatar] = React.useState('Busy working mom');
    const [service, setService] = React.useState('Deep cleaning');
    const [offer, setOffer] = React.useState('20% off first recurring clean');
    const [tone, setTone] = React.useState('Friendly');
    const [platform, setPlatform] = React.useState('facebook');

    return (
      <div style={{ display: 'grid', gridTemplateColumns: '340px 1fr', gap: 'var(--space-6)', alignItems: 'start' }}>
        <Card>
          <CardHeader title="Campaign setup" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <Field label="Customer avatar"><Select value={avatar} onChange={(e) => setAvatar(e.target.value)} options={D.avatars} /></Field>
            <Field label="Service type"><Select value={service} onChange={(e) => setService(e.target.value)} options={['Standard cleaning', 'Deep cleaning', 'Move-out cleaning', 'Airbnb turnover', 'Recurring maid service']} /></Field>
            <Field label="Offer"><Select value={offer} onChange={(e) => setOffer(e.target.value)} options={['20% off first recurring clean', '$50 off deep clean', 'Free fridge & oven add-on', 'Refer a friend, get $25']} /></Field>
            <Field label="Tone"><Select value={tone} onChange={(e) => setTone(e.target.value)} options={['Professional', 'Friendly', 'Urgent', 'Luxury', 'Family-focused']} /></Field>
            <Button variant="primary" fullWidth leadingIcon={<I.sparkles size={16} />}>Generate content</Button>
          </div>
        </Card>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {PLATFORMS.map((p) => {
              const on = p.id === platform; const Ico = I[p.icon];
              return (
                <button key={p.id} onClick={() => setPlatform(p.id)} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 14px', cursor: 'pointer',
                  borderRadius: 'var(--radius-pill)', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-sm)',
                  border: `1px solid ${on ? 'var(--brand-600)' : 'var(--border-strong)'}`,
                  background: on ? 'var(--brand-600)' : 'var(--surface-card)', color: on ? '#fff' : 'var(--gray-700)',
                }}><Ico size={15} />{p.label}</button>
              );
            })}
          </div>
          <Card>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Badge tone="brand" dot>{tone}</Badge>
                <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{avatar} · {service}</span>
              </div>
              <Button variant="ghost" size="sm" leadingIcon={<I.check size={15} />}>Copy</Button>
            </div>
            <div style={{ whiteSpace: 'pre-wrap', fontSize: 'var(--text-md)', lineHeight: 1.6, color: 'var(--text-body)', background: 'var(--gray-50)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: 'var(--space-5)', minHeight: 200 }}>
              {COPY[platform](avatar, tone)}
            </div>
          </Card>
          <Alert tone="success" title="Saved to campaigns">This draft was added to your Marketing campaigns library.</Alert>
        </div>
      </div>
    );
  }

  const SEO_BLOCKS = [
    { title: 'Local keywords', icon: 'search', items: ['house cleaning winter park fl', 'deep cleaning lake nona', 'move out cleaning orlando', 'airbnb turnover cleaning kissimmee', 'recurring maid service windermere'] },
    { title: 'Service-area page ideas', icon: 'map', items: ['House Cleaning in Winter Park', 'Lake Nona Recurring Maid Service', 'Move-Out Cleaning in Clermont', 'Airbnb Cleaning in Kissimmee'] },
    { title: 'Blog post ideas', icon: 'sparkles', items: ['How much does a deep clean cost in Orlando?', '7 things to clean before an Airbnb guest checks in', 'Move-out cleaning checklist for Florida renters'] },
    { title: 'Review request messages', icon: 'mail', items: ['Hi {{name}}, thanks for choosing us! A quick Google review helps our small Orlando team a ton 🙏'] },
  ];

  function Seo() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
        <Card accent>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div className="eyebrow">Local SEO studio</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-2xl)', color: 'var(--navy-900)', marginTop: 4 }}>Get found across the Orlando metro</div>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <Select options={['All service areas', 'Winter Park', 'Lake Nona', 'Kissimmee', 'Windermere', 'Clermont']} style={{ width: 200 }} />
              <Button variant="primary" leadingIcon={<I.sparkles size={16} />}>Generate</Button>
            </div>
          </div>
        </Card>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)' }}>
          {SEO_BLOCKS.map((b) => {
            const Ico = I[b.icon];
            return (
              <Card key={b.title}>
                <CardHeader title={<span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><span style={{ color: 'var(--brand-600)' }}><Ico size={18} /></span>{b.title}</span>} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {b.items.map((it) => (
                    <div key={it} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, padding: '10px 12px', background: 'var(--gray-50)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-sm)', color: 'var(--text-body)' }}>
                      <span>{it}</span>
                      <span style={{ color: 'var(--text-faint)', flexShrink: 0 }}><I.plus size={15} /></span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }

  window.OCGSScreens = window.OCGSScreens || {};
  Object.assign(window.OCGSScreens, { Marketing, Seo });
})();
