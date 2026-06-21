/* Lucide-style outline icons (1.6px stroke, rounded) as a small React set.
   Matches the brand's Lucide iconography. Exposed on window for the kit. */
(function () {
  const Icon = ({ d, size = 20, paths, fill, ...rest }) => (
    React.createElement('svg', {
      width: size, height: size, viewBox: '0 0 24 24', fill: 'none',
      stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round',
      ...rest,
    }, paths)
  );
  const P = (d) => React.createElement('path', { d, key: d });
  const make = (...ds) => (props) => Icon({ ...props, paths: ds.map(P) });
  const raw = (children) => (props) => Icon({ ...props, paths: children });

  const Icons = {
    dashboard: make('M3 13h8V3H3zM13 21h8v-10h-8zM13 3v6h8V3zM3 21h8v-6H3z'),
    users: raw([
      React.createElement('circle', { cx: 9, cy: 8, r: 3.2, key: 'c' }),
      P('M2.5 20c.6-3.4 3-5.2 6.5-5.2s5.9 1.8 6.5 5.2'),
      P('M16 5.2A3 3 0 0 1 16 11'), P('M18 14.4c2.3.5 3.7 2 4 5.6'),
    ]),
    calculator: raw([
      React.createElement('rect', { x: 4, y: 2.5, width: 16, height: 19, rx: 2.5, key: 'r' }),
      P('M8 6.5h8'), P('M8 11h.01M12 11h.01M16 11h.01M8 14.5h.01M12 14.5h.01M16 14.5h.01M8 18h.01M12 18h.01M16 18h.01'),
    ]),
    calendar: raw([
      React.createElement('rect', { x: 3.5, y: 5, width: 17, height: 16, rx: 2.5, key: 'r' }),
      P('M3.5 10h17M8 3v4M16 3v4'),
    ]),
    briefcase: raw([
      React.createElement('rect', { x: 3, y: 7.5, width: 18, height: 12.5, rx: 2.5, key: 'r' }),
      P('M8 7.5V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5M3 13h18'),
    ]),
    megaphone: make('M3 11v2a1 1 0 0 0 1 1h2l9 5V5L6 10H4a1 1 0 0 0-1 1z', 'M18 8a4 4 0 0 1 0 8'),
    dollar: make('M12 2v20', 'M16 6.5C16 4.6 14.2 3.5 12 3.5S8 4.7 8 6.8C8 11 16 9.8 16 14c0 2.1-1.8 3.3-4 3.3S8 16.2 8 14.3'),
    map: raw([P('M9 4.5 3.5 6.7v12.8L9 17.3l6 2.2 5.5-2.2V4.5L15 6.7z'), P('M9 4.5v12.8M15 6.7v12.8')]),
    settings: raw([
      React.createElement('circle', { cx: 12, cy: 12, r: 3, key: 'c' }),
      P('M19.4 13.5a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-2.9 1.2V21a2 2 0 0 1-4 0v-.1A1.7 1.7 0 0 0 6.2 19l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0-1.1-2.9H2a2 2 0 0 1 0-4h.1A1.7 1.7 0 0 0 3.2 6.2l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H8a1.7 1.7 0 0 0 1-1.6V2a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 2.9 1.1l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V8a1.7 1.7 0 0 0 1.6 1H22a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z'),
    ]),
    plus: make('M12 5v14M5 12h14'),
    search: raw([React.createElement('circle', { cx: 11, cy: 11, r: 7, key: 'c' }), P('M21 21l-4.3-4.3')]),
    bell: make('M18 8.5a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9', 'M13.7 21a2 2 0 0 1-3.4 0'),
    chevronDown: make('M6 9l6 6 6-6'),
    chevronRight: make('M9 6l6 6-6 6'),
    arrowUp: make('M12 19V5M5 12l7-7 7 7'),
    arrowRight: make('M5 12h14M13 6l6 6-6 6'),
    phone: make('M6.6 3.5 4 4.3a2 2 0 0 0-1.3 2.4 18 18 0 0 0 12.6 12.6 2 2 0 0 0 2.4-1.3l.8-2.6a1.5 1.5 0 0 0-.9-1.8l-3-1.1a1.5 1.5 0 0 0-1.6.4l-1 1A14 14 0 0 1 8 9l1-1a1.5 1.5 0 0 0 .4-1.6l-1.1-3a1.5 1.5 0 0 0-1.7-.9z'),
    mail: raw([React.createElement('rect', { x: 3, y: 5, width: 18, height: 14, rx: 2.5, key: 'r' }), P('M3.5 6.5l8.5 6 8.5-6')]),
    mapPin: raw([P('M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z'), React.createElement('circle', { cx: 12, cy: 10, r: 2.6, key: 'c' })]),
    sparkles: make('M12 3l1.7 4.6L18 9l-4.3 1.4L12 15l-1.7-4.6L6 9l4.3-1.4z', 'M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8z'),
    home: make('M3 11l9-7 9 7', 'M5 10v10h14V10'),
    check: make('M5 12.5l4.5 4.5L19 7'),
    clock: raw([React.createElement('circle', { cx: 12, cy: 12, r: 8.5, key: 'c' }), P('M12 7.5V12l3 2')]),
    filter: make('M3 5h18l-7 8v6l-4 2v-8z'),
    dots: raw([
      React.createElement('circle', { cx: 5, cy: 12, r: 1.4, key: 'a' }),
      React.createElement('circle', { cx: 12, cy: 12, r: 1.4, key: 'b' }),
      React.createElement('circle', { cx: 19, cy: 12, r: 1.4, key: 'c' }),
    ]),
    facebook: make('M14 9h2.5V5.5H14c-2 0-3.5 1.5-3.5 3.5v2H8v3.5h2.5V21h3.5v-6.5h2.5L17 11h-3V9z'),
    instagram: raw([
      React.createElement('rect', { x: 3.5, y: 3.5, width: 17, height: 17, rx: 5, key: 'r' }),
      React.createElement('circle', { cx: 12, cy: 12, r: 4, key: 'c' }), P('M17 7h.01'),
    ]),
    trendingUp: make('M3 16.5l5.5-5.5 4 4L21 7.5', 'M16 7.5h5v5'),
  };

  window.OCGSIcons = Icons;
})();
