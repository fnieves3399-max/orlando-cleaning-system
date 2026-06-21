/* Online quote calculator (internal tool view). window.OCGSScreens.Quote */
(function () {
  const NS = window.OrlandoCleaningGrowthSystemDesignSystem_e087c1;
  const { Card, CardHeader, Field, Input, Select, Textarea, Checkbox, Button, Badge, Alert } = NS;
  const I = window.OCGSIcons;

  const TYPES = {
    'Standard cleaning': { mult: 1, fixed: 0 },
    'Deep cleaning': { mult: 1.5, fixed: 0 },
    'Move-in / move-out': { mult: 1.6, fixed: 0 },
    'Airbnb turnover': { mult: 1, fixed: 165 },
    'Post-construction': { mult: 2.0, fixed: 0 },
  };
  const FREQ = { 'One-time': 0, 'Weekly': 0.15, 'Biweekly': 0.10, 'Monthly': 0.05 };
  const ADDONS = {
    'Inside fridge': 35, 'Inside oven': 35, 'Interior windows': 60, 'Laundry': 25,
    'Dishes': 15, 'Inside cabinets': 45, 'Garage sweep': 30, 'Patio cleaning': 40,
  };

  function Quote() {
    const [sqft, setSqft] = React.useState(2000);
    const [beds, setBeds] = React.useState(3);
    const [baths, setBaths] = React.useState(2);
    const [type, setType] = React.useState('Deep cleaning');
    const [freq, setFreq] = React.useState('Biweekly');
    const [pets, setPets] = React.useState(true);
    const [addons, setAddons] = React.useState({ 'Inside fridge': true, 'Interior windows': true });

    const calc = React.useMemo(() => {
      const t = TYPES[type];
      let base = 120 + sqft * 0.05 + beds * 15 + baths * 20;
      base = t.fixed ? t.fixed + (sqft * 0.03) : base * t.mult;
      if (pets) base += 20;
      const addonTotal = Object.keys(addons).filter((k) => addons[k]).reduce((s, k) => s + ADDONS[k], 0);
      let total = base + addonTotal;
      const disc = FREQ[freq];
      const discounted = total * (1 - disc);
      return { low: Math.round(discounted / 5) * 5, high: Math.round((discounted * 1.18) / 5) * 5, disc, addonTotal };
    }, [sqft, beds, baths, type, freq, pets, addons]);

    const money = (n) => '$' + n.toLocaleString('en-US');
    const toggle = (k) => setAddons((a) => ({ ...a, [k]: !a[k] }));

    return (
      <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 'var(--space-6)', alignItems: 'start' }}>
        <Card>
          <CardHeader title="Build a quote" subtitle="Fill in the details — the estimate updates live" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5) var(--space-5)' }}>
            <Field label="Home square footage"><Input type="number" value={sqft} onChange={(e) => setSqft(+e.target.value || 0)} trailing="sq ft" /></Field>
            <Field label="Cleaning type"><Select value={type} onChange={(e) => setType(e.target.value)} options={Object.keys(TYPES)} /></Field>
            <Field label="Bedrooms"><Input type="number" value={beds} onChange={(e) => setBeds(+e.target.value || 0)} /></Field>
            <Field label="Bathrooms"><Input type="number" value={baths} onChange={(e) => setBaths(+e.target.value || 0)} /></Field>
            <Field label="Frequency"><Select value={freq} onChange={(e) => setFreq(e.target.value)} options={Object.keys(FREQ)} /></Field>
            <Field label="Preferred date"><Input type="text" placeholder="Sat, Jun 21" /></Field>
          </div>

          <div style={{ marginTop: 'var(--space-6)' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--navy-900)', marginBottom: 12 }}>Add-ons</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 20px' }}>
              {Object.keys(ADDONS).map((k) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Checkbox checked={!!addons[k]} onChange={() => toggle(k)} label={k} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>+${ADDONS[k]}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 'var(--space-6)', display: 'flex', alignItems: 'center', gap: 24 }}>
            <Checkbox checked={pets} onChange={setPets} label="Pets in home (+$20)" />
          </div>
        </Card>

        <div style={{ position: 'sticky', top: 'calc(var(--topbar-height) + var(--space-6))', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <Card accent>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--accent)' }}>Estimated price</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, margin: '8px 0 4px' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-4xl)', color: 'var(--navy-900)', letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums' }}>{money(calc.low)}</span>
              <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>– {money(calc.high)}</span>
            </div>
            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', marginBottom: 16 }}>{type} · {freq}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7, fontSize: 'var(--text-sm)', borderTop: '1px solid var(--border)', paddingTop: 14 }}>
              <Row k={`${type}`} v={`${TYPES[type].fixed ? 'flat' : '×' + TYPES[type].mult}`} />
              <Row k="Add-ons" v={'+$' + calc.addonTotal} />
              {calc.disc > 0 && <Row k={`${freq} discount`} v={'−' + Math.round(calc.disc * 100) + '%'} green />}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 18 }}>
              <Button variant="success" fullWidth leadingIcon={<I.calendar size={16} />}>Book a call</Button>
              <Button variant="secondary" fullWidth leadingIcon={<I.mail size={16} />}>Email this quote</Button>
            </div>
          </Card>
          <Alert tone="info">Lead auto-saved to CRM and the quote is logged on submit.</Alert>
        </div>
      </div>
    );
  }

  function Row({ k, v, green }) {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ color: 'var(--text-body)' }}>{k}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: green ? 'var(--green-600)' : 'var(--navy-900)' }}>{v}</span>
      </div>
    );
  }

  window.OCGSScreens = window.OCGSScreens || {};
  window.OCGSScreens.Quote = Quote;
})();
