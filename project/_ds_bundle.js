/* @ds-bundle: {"format":3,"namespace":"OrlandoCleaningGrowthSystemDesignSystem_e087c1","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CardHeader","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Meter","sourcePath":"components/data/Meter.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"Table","sourcePath":"components/data/Table.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"eb2569c85c82","components/core/Badge.jsx":"8d078f8921ff","components/core/Button.jsx":"2adffea7a4f7","components/core/Card.jsx":"158e23fbf50d","components/core/IconButton.jsx":"d43e01ac87ff","components/core/Logo.jsx":"12b6989dee9c","components/data/Meter.jsx":"252ab7b0057a","components/data/StatCard.jsx":"9182f2d27f16","components/data/Table.jsx":"e55f06e286a4","components/feedback/Alert.jsx":"f00bfd8b789a","components/forms/Checkbox.jsx":"408fc6f705e1","components/forms/Field.jsx":"c994e398c473","components/forms/Input.jsx":"a4652538634a","components/forms/Select.jsx":"43587016d93c","components/forms/Textarea.jsx":"02d1c43337c2","components/navigation/Tabs.jsx":"574bfbf2f813","ui_kits/app/AppShell.jsx":"61821a6c987c","ui_kits/app/CrmScreen.jsx":"24d8dd11d102","ui_kits/app/DashboardScreen.jsx":"84569a8c2029","ui_kits/app/Icons.jsx":"ef9f814a5193","ui_kits/app/MarketingScreens.jsx":"41c2e1b205f9","ui_kits/app/OpsScreens.jsx":"00a811efddab","ui_kits/app/QuoteScreen.jsx":"1e2da4371740","ui_kits/app/data.js":"67ecfa50bcb6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OrlandoCleaningGrowthSystemDesignSystem_e087c1 = window.OrlandoCleaningGrowthSystemDesignSystem_e087c1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 56
};
const PALETTE = ['var(--brand-600)', 'var(--green-600)', 'var(--navy-700)', 'var(--amber-600)', 'var(--brand-800)'];
function initials(name = '') {
  return name.trim().split(/\s+/).slice(0, 2).map(p => p[0] || '').join('').toUpperCase();
}
function pick(name = '') {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = name.charCodeAt(i) + ((h << 5) - h);
  return PALETTE[Math.abs(h) % PALETTE.length];
}

/**
 * Circular avatar. Renders an image, else colored initials derived from name.
 */
function Avatar({
  name = '',
  src,
  size = 'md',
  style,
  ...rest
}) {
  const dim = SIZES[size] || SIZES.md;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      borderRadius: '50%',
      flexShrink: 0,
      overflow: 'hidden',
      background: src ? 'var(--gray-100)' : pick(name),
      color: '#fff',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: dim * 0.4,
      letterSpacing: '0.01em',
      boxShadow: 'inset 0 0 0 1px rgba(12,33,56,0.06)',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials(name));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Tone → background/text/border. Tints are soft; text is the deep variant. */
const TONES = {
  neutral: {
    bg: 'var(--gray-100)',
    fg: 'var(--gray-700)',
    bd: 'var(--gray-200)'
  },
  brand: {
    bg: 'var(--brand-50)',
    fg: 'var(--brand-700)',
    bd: 'var(--brand-100)'
  },
  success: {
    bg: 'var(--green-50)',
    fg: 'var(--green-700)',
    bd: 'var(--green-100)'
  },
  warning: {
    bg: 'var(--amber-50)',
    fg: 'var(--amber-600)',
    bd: 'var(--amber-100)'
  },
  danger: {
    bg: 'var(--red-50)',
    fg: 'var(--red-600)',
    bd: 'var(--red-100)'
  }
};

/* Map the product's lifecycle statuses to a tone. */
const STATUS_TONE = {
  'new lead': 'brand',
  'new': 'brand',
  quoted: 'warning',
  pending: 'warning',
  scheduled: 'warning',
  booked: 'success',
  active: 'success',
  completed: 'success',
  paid: 'success',
  'in progress': 'brand',
  inactive: 'neutral',
  draft: 'neutral',
  lost: 'danger',
  canceled: 'danger',
  cancelled: 'danger',
  overdue: 'danger'
};

/**
 * Compact label. Pass `status` to auto-tone by lifecycle state, or set `tone`.
 */
function Badge({
  children,
  tone,
  status,
  dot = false,
  style,
  ...rest
}) {
  const resolved = tone || (status ? STATUS_TONE[String(status).toLowerCase()] : null) || 'neutral';
  const t = TONES[resolved] || TONES.neutral;
  const label = children || status;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 22,
      padding: '0 9px',
      background: t.bg,
      color: t.fg,
      border: `1px solid ${t.bd}`,
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-xs)',
      fontWeight: 600,
      letterSpacing: '0.01em',
      textTransform: 'capitalize',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: t.fg
    }
  }), label);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PADDING = {
  sm: '0 14px',
  md: '0 18px',
  lg: '0 24px'
};
const HEIGHT = {
  sm: 'var(--control-h-sm)',
  md: 'var(--control-h-md)',
  lg: 'var(--control-h-lg)'
};
const FONT = {
  sm: 'var(--text-sm)',
  md: 'var(--text-md)',
  lg: 'var(--text-lg)'
};
const VARIANTS = {
  primary: {
    background: 'var(--brand-600)',
    color: 'var(--text-on-brand)',
    border: '1px solid var(--brand-600)',
    boxShadow: 'var(--shadow-xs)'
  },
  secondary: {
    background: 'var(--surface-card)',
    color: 'var(--navy-900)',
    border: '1px solid var(--border-strong)',
    boxShadow: 'var(--shadow-xs)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--brand-700)',
    border: '1px solid transparent'
  },
  success: {
    background: 'var(--green-600)',
    color: '#fff',
    border: '1px solid var(--green-600)',
    boxShadow: 'var(--shadow-xs)'
  },
  danger: {
    background: 'var(--surface-card)',
    color: 'var(--danger)',
    border: '1px solid var(--red-100)'
  }
};

/**
 * Primary interactive control. Variants, sizes, optional leading/trailing icon.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  leadingIcon,
  trailingIcon,
  disabled = false,
  type = 'button',
  style,
  ...rest
}) {
  const base = VARIANTS[variant] || VARIANTS.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      height: HEIGHT[size],
      padding: PADDING[size],
      width: fullWidth ? '100%' : 'auto',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: FONT[size],
      letterSpacing: '-0.01em',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)',
      ...base,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'translateY(1px)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'translateY(0)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
    }
  }, rest), leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      marginLeft: -2
    },
    "aria-hidden": "true"
  }, leadingIcon), children, trailingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      marginRight: -2
    },
    "aria-hidden": "true"
  }, trailingIcon));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Surface container. Optional padded body, header, and hover lift.
 */
function Card({
  children,
  padding = 'md',
  interactive = false,
  accent = false,
  style,
  ...rest
}) {
  const pad = {
    none: 0,
    sm: 'var(--space-4)',
    md: 'var(--space-6)',
    lg: 'var(--space-7)'
  }[padding];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderTop: accent ? '3px solid var(--brand-600)' : '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      padding: pad,
      transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    },
    onMouseEnter: interactive ? e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      e.currentTarget.style.transform = 'translateY(-2px)';
    } : undefined,
    onMouseLeave: interactive ? e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      e.currentTarget.style.transform = 'translateY(0)';
    } : undefined
  }, rest), children);
}
function CardHeader({
  title,
  subtitle,
  action,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      marginBottom: 'var(--space-4)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-lg)',
      color: 'var(--navy-900)',
      letterSpacing: '-0.01em'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, subtitle)), action);
}
Object.assign(__ds_scope, { Card, CardHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 32,
  md: 40,
  lg: 48
};

/**
 * Square icon-only button. Pass an SVG/icon node as children.
 */
function IconButton({
  children,
  size = 'md',
  variant = 'secondary',
  label,
  disabled = false,
  style,
  ...rest
}) {
  const dim = SIZES[size];
  const variants = {
    secondary: {
      background: 'var(--surface-card)',
      color: 'var(--gray-700)',
      border: '1px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--gray-600)',
      border: '1px solid transparent'
    },
    primary: {
      background: 'var(--brand-600)',
      color: '#fff',
      border: '1px solid var(--brand-600)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      padding: 0,
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)',
      ...(variants[variant] || variants.secondary),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Brand logo + mark for Orlando Cleaning Growth System.
 * A fresh water-droplet tile with a sparkle = clean, Florida.
 */
function Logo({
  variant = 'full',
  size = 28,
  tone = 'color',
  style,
  ...rest
}) {
  const isLight = tone === 'light'; // for use on navy/dark backgrounds
  const tileFill = isLight ? '#FFFFFF' : 'var(--brand-600)';
  const dropFill = isLight ? 'var(--brand-700)' : '#FFFFFF';
  const wordColor = isLight ? '#FFFFFF' : 'var(--navy-900)';
  const subColor = isLight ? 'var(--brand-200)' : 'var(--brand-600)';
  const Mark = /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 32 32",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "32",
    height: "32",
    rx: "9",
    fill: tileFill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 6.5c3.2 3.6 6 6.9 6 10.2a6 6 0 1 1-12 0c0-3.3 2.8-6.6 6-10.2Z",
    fill: dropFill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22.5 8.2l.5 1.4 1.4.5-1.4.5-.5 1.4-.5-1.4-1.4-.5 1.4-.5.5-1.4Z",
    fill: dropFill,
    opacity: isLight ? 0.9 : 0.85
  }));
  if (variant === 'mark') {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: 'inline-flex',
        ...style
      }
    }, rest), Mark);
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-display)',
      ...style
    }
  }, rest), Mark, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: size * 0.6,
      color: wordColor,
      letterSpacing: '-0.02em'
    }
  }, "Orlando\xA0Cleaning"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: size * 0.34,
      color: subColor,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      marginTop: 3
    }
  }, "Growth System")));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/data/Meter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Horizontal progress / proportion bar. `value` 0–100. Optional label + value text.
 */
function Meter({
  value = 0,
  tone = 'brand',
  label,
  valueLabel,
  height = 8,
  style,
  ...rest
}) {
  const fill = {
    brand: 'var(--brand-600)',
    success: 'var(--green-600)',
    warning: 'var(--amber-500)',
    danger: 'var(--red-500)',
    navy: 'var(--navy-800)'
  }[tone] || 'var(--brand-600)';
  const pct = Math.max(0, Math.min(100, value));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, rest), (label || valueLabel) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 'var(--text-sm)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-body)',
      fontWeight: 500
    }
  }, label), valueLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--navy-900)',
      fontWeight: 700,
      fontVariantNumeric: 'tabular-nums'
    }
  }, valueLabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height,
      background: 'var(--gray-100)',
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: '100%',
      background: fill,
      borderRadius: 'var(--radius-pill)',
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { Meter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Meter.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Dashboard metric tile: label, big value, optional delta + icon.
 * `tone` tints the icon chip; `trend` ('up'|'down') colors the delta.
 */
function StatCard({
  label,
  value,
  delta,
  trend,
  icon,
  tone = 'brand',
  hint,
  style,
  ...rest
}) {
  const chip = {
    brand: {
      bg: 'var(--brand-50)',
      fg: 'var(--brand-600)'
    },
    success: {
      bg: 'var(--green-50)',
      fg: 'var(--green-600)'
    },
    warning: {
      bg: 'var(--amber-50)',
      fg: 'var(--amber-600)'
    },
    navy: {
      bg: 'var(--gray-100)',
      fg: 'var(--navy-800)'
    },
    danger: {
      bg: 'var(--red-50)',
      fg: 'var(--red-600)'
    }
  }[tone] || {
    bg: 'var(--brand-50)',
    fg: 'var(--brand-600)'
  };
  const trendColor = trend === 'down' ? 'var(--danger)' : 'var(--positive)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      padding: 'var(--space-5)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--text-muted)',
      letterSpacing: '0.01em'
    }
  }, label), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 34,
      height: 34,
      borderRadius: 'var(--radius-md)',
      background: chip.bg,
      color: chip.fg
    }
  }, icon)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 800,
      color: 'var(--navy-900)',
      letterSpacing: '-0.02em',
      lineHeight: 1,
      fontVariantNumeric: 'tabular-nums'
    }
  }, value), delta && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3,
      fontSize: 'var(--text-sm)',
      fontWeight: 700,
      color: trendColor,
      fontVariantNumeric: 'tabular-nums'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    style: {
      transform: trend === 'down' ? 'rotate(180deg)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 2.5v7M6 2.5L3 5.5M6 2.5l3 3",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), delta)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-faint)',
      marginTop: -4
    }
  }, hint));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/data/Table.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Lightweight data table. `columns` = [{ key, header, align, render, width }],
 * `rows` = array of objects. `onRowClick` optional.
 */
function Table({
  columns = [],
  rows = [],
  onRowClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-sm)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 'var(--text-md)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--gray-50)'
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      textAlign: c.align || 'left',
      padding: '11px 16px',
      width: c.width,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-xs)',
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      borderBottom: '1px solid var(--border)',
      whiteSpace: 'nowrap'
    }
  }, c.header)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, i) => /*#__PURE__*/React.createElement("tr", {
    key: row.id ?? i,
    onClick: onRowClick ? () => onRowClick(row) : undefined,
    style: {
      cursor: onRowClick ? 'pointer' : 'default',
      transition: 'background var(--dur-fast) var(--ease-out)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--gray-50)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'transparent';
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      textAlign: c.align || 'left',
      padding: '13px 16px',
      borderBottom: i === rows.length - 1 ? 'none' : '1px solid var(--border)',
      color: 'var(--text-body)',
      verticalAlign: 'middle'
    }
  }, c.render ? c.render(row[c.key], row) : row[c.key])))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Table.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  info: {
    bg: 'var(--brand-50)',
    bd: 'var(--brand-100)',
    fg: 'var(--brand-700)',
    icon: 'var(--brand-600)'
  },
  success: {
    bg: 'var(--green-50)',
    bd: 'var(--green-100)',
    fg: 'var(--green-700)',
    icon: 'var(--green-600)'
  },
  warning: {
    bg: 'var(--amber-50)',
    bd: 'var(--amber-100)',
    fg: 'var(--amber-600)',
    icon: 'var(--amber-600)'
  },
  danger: {
    bg: 'var(--red-50)',
    bd: 'var(--red-100)',
    fg: 'var(--red-600)',
    icon: 'var(--red-600)'
  }
};
const GLYPH = {
  info: 'M8 7.5v4M8 5.2h.01',
  success: 'M4.5 8.2l2.3 2.3L11.5 6',
  warning: 'M8 5v4M8 11.2h.01',
  danger: 'M5.5 5.5l5 5M10.5 5.5l-5 5'
};

/** Inline contextual message banner. */
function Alert({
  tone = 'info',
  title,
  children,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 12,
      padding: '13px 16px',
      background: t.bg,
      border: `1px solid ${t.bd}`,
      borderRadius: 'var(--radius-md)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 22,
      height: 22,
      borderRadius: '50%',
      flexShrink: 0,
      marginTop: 1,
      background: 'var(--surface-card)',
      color: t.icon,
      boxShadow: 'inset 0 0 0 1.5px currentColor'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: GLYPH[tone],
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-md)',
      color: t.fg,
      marginBottom: children ? 2 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)'
    }
  }, children)));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox with label. Controlled via `checked`/`onChange`. */
function Checkbox({
  checked = false,
  onChange,
  label,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontSize: 'var(--text-md)',
      color: 'var(--text-body)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange?.(!checked),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      flexShrink: 0,
      background: checked ? 'var(--brand-600)' : 'var(--surface-card)',
      border: `1.5px solid ${checked ? 'var(--brand-600)' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius-xs)',
      transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 13 13",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.8l2.6 2.6L10.5 4",
    stroke: "#fff",
    strokeWidth: "1.9",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Labeled field wrapper. Provides label, optional hint, error, required mark.
 */
function Field({
  label,
  htmlFor,
  hint,
  error,
  required = false,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--navy-900)',
      letterSpacing: '-0.01em'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--danger)',
      marginLeft: 3
    }
  }, "*")), children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--danger)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const HEIGHT = {
  sm: 'var(--control-h-sm)',
  md: 'var(--control-h-md)',
  lg: 'var(--control-h-lg)'
};

/**
 * Text input. Optional leading adornment (e.g. $ or an icon) and invalid state.
 */
function Input({
  size = 'md',
  invalid = false,
  leading,
  trailing,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: HEIGHT[size],
      padding: '0 12px',
      background: 'var(--surface-card)',
      border: `1px solid ${invalid ? 'var(--red-500)' : focused ? 'var(--brand-500)' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focused ? 'var(--focus-ring)' : 'var(--shadow-xs)',
      transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...style
    }
  }, leading && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-muted)',
      fontSize: 'var(--text-md)'
    }
  }, leading), /*#__PURE__*/React.createElement("input", _extends({
    onFocus: e => {
      setFocused(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur?.(e);
    }
  }, rest, {
    style: {
      flex: 1,
      minWidth: 0,
      height: '100%',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      color: 'var(--navy-900)'
    }
  })), trailing && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-muted)'
    }
  }, trailing));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const HEIGHT = {
  sm: 'var(--control-h-sm)',
  md: 'var(--control-h-md)',
  lg: 'var(--control-h-lg)'
};

/**
 * Native select styled to match Input, with a custom chevron.
 */
function Select({
  size = 'md',
  invalid = false,
  options = [],
  placeholder,
  children,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    onFocus: e => {
      setFocused(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur?.(e);
    }
  }, rest, {
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: HEIGHT[size],
      padding: '0 38px 0 12px',
      background: 'var(--surface-card)',
      border: `1px solid ${invalid ? 'var(--red-500)' : focused ? 'var(--brand-500)' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focused ? 'var(--focus-ring)' : 'var(--shadow-xs)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      color: 'var(--navy-900)',
      cursor: 'pointer',
      outline: 'none',
      transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)'
    }
  }), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  }), children), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: 'absolute',
      right: 12,
      pointerEvents: 'none',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 6l4 4 4-4",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multi-line text input matching the Input style. */
function Textarea({
  invalid = false,
  rows = 4,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    onFocus: e => {
      setFocused(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur?.(e);
    }
  }, rest, {
    style: {
      width: '100%',
      padding: '10px 12px',
      resize: 'vertical',
      background: 'var(--surface-card)',
      border: `1px solid ${invalid ? 'var(--red-500)' : focused ? 'var(--brand-500)' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focused ? 'var(--focus-ring)' : 'var(--shadow-xs)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      lineHeight: 1.5,
      color: 'var(--navy-900)',
      outline: 'none',
      transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Underline tab bar. `tabs` = [{ id, label, count? }]. Controlled via `value`/`onChange`.
 */
function Tabs({
  tabs = [],
  value,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--border)',
      ...style
    }
  }, rest), tabs.map(t => {
    const active = t.id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      type: "button",
      onClick: () => onChange?.(t.id),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        padding: '10px 14px',
        marginBottom: -1,
        background: 'transparent',
        cursor: 'pointer',
        border: 'none',
        borderBottom: `2px solid ${active ? 'var(--brand-600)' : 'transparent'}`,
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-md)',
        fontWeight: 600,
        color: active ? 'var(--navy-900)' : 'var(--text-muted)',
        transition: 'color var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)'
      }
    }, t.label, t.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 20,
        height: 18,
        padding: '0 6px',
        borderRadius: 'var(--radius-pill)',
        background: active ? 'var(--brand-100)' : 'var(--gray-100)',
        color: active ? 'var(--brand-700)' : 'var(--text-muted)',
        fontSize: 'var(--text-2xs)',
        fontWeight: 700,
        fontVariantNumeric: 'tabular-nums'
      }
    }, t.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/AppShell.jsx
try { (() => {
/* App shell: navy sidebar + topbar. Exposes window.OCGSShell. */
(function () {
  const NS = window.OrlandoCleaningGrowthSystemDesignSystem_e087c1;
  const {
    Logo,
    Button,
    Avatar
  } = NS;
  const I = window.OCGSIcons;
  const NAV = [{
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'dashboard'
  }, {
    id: 'crm',
    label: 'Leads & CRM',
    icon: 'users'
  }, {
    id: 'quote',
    label: 'Quote calculator',
    icon: 'calculator'
  }, {
    id: 'jobs',
    label: 'Jobs',
    icon: 'calendar'
  }, {
    id: 'subs',
    label: 'Subcontractors',
    icon: 'briefcase'
  }, {
    id: 'finance',
    label: 'Financials',
    icon: 'dollar'
  }, {
    id: 'marketing',
    label: 'Marketing studio',
    icon: 'megaphone'
  }, {
    id: 'seo',
    label: 'Local SEO',
    icon: 'map'
  }];
  function Sidebar({
    active,
    onNavigate
  }) {
    return /*#__PURE__*/React.createElement("aside", {
      style: {
        width: 'var(--sidebar-width)',
        flexShrink: 0,
        background: 'var(--navy-900)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        position: 'sticky',
        top: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '20px 20px 18px'
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      variant: "full",
      size: 24,
      tone: "light"
    })), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        padding: '6px 12px',
        flex: 1
      }
    }, NAV.map(n => {
      const on = active === n.id;
      const Ico = I[n.icon];
      return /*#__PURE__*/React.createElement("button", {
        key: n.id,
        onClick: () => onNavigate(n.id),
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 11,
          padding: '9px 12px',
          border: 'none',
          borderRadius: 'var(--radius-md)',
          cursor: 'pointer',
          textAlign: 'left',
          background: on ? 'rgba(86,176,232,0.16)' : 'transparent',
          color: on ? '#fff' : 'var(--text-on-navy)',
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--text-md)',
          fontWeight: on ? 700 : 500,
          transition: 'background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)'
        },
        onMouseEnter: e => {
          if (!on) e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
        },
        onMouseLeave: e => {
          if (!on) e.currentTarget.style.background = 'transparent';
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          color: on ? 'var(--brand-300)' : 'var(--gray-400)',
          display: 'inline-flex'
        }
      }, /*#__PURE__*/React.createElement(Ico, {
        size: 19
      })), n.label);
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '14px 16px',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: "Owner",
      size: "sm"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        lineHeight: 1.25
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-sm)',
        fontWeight: 600,
        color: '#fff'
      }
    }, "Diana Reyes"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--text-2xs)',
        color: 'var(--gray-400)'
      }
    }, "Owner \xB7 Orlando, FL"))));
  }
  function Topbar({
    title,
    subtitle,
    onNewLead
  }) {
    const Search = I.search,
      Bell = I.bell,
      Plus = I.plus;
    return /*#__PURE__*/React.createElement("header", {
      style: {
        height: 'var(--topbar-height)',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-5)',
        padding: '0 var(--space-7)',
        background: 'var(--surface-card)',
        borderBottom: '1px solid var(--border)',
        position: 'sticky',
        top: 0,
        zIndex: 5
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-xl)',
        fontWeight: 800,
        color: 'var(--navy-900)',
        letterSpacing: '-0.01em',
        lineHeight: 1.1
      }
    }, title), subtitle && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--text-sm)',
        color: 'var(--text-muted)'
      }
    }, subtitle)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        height: 38,
        padding: '0 12px',
        width: 240,
        background: 'var(--gray-50)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-md)',
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(Search, {
      size: 17
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-sm)'
      }
    }, "Search leads, jobs\u2026")), /*#__PURE__*/React.createElement("button", {
      style: {
        position: 'relative',
        width: 38,
        height: 38,
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border)',
        background: 'var(--surface-card)',
        color: 'var(--gray-600)',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Bell, {
      size: 18
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: 8,
        right: 9,
        width: 7,
        height: 7,
        background: 'var(--red-500)',
        borderRadius: '50%',
        border: '1.5px solid #fff'
      }
    })), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      leadingIcon: /*#__PURE__*/React.createElement(Plus, {
        size: 17
      }),
      onClick: onNewLead
    }, "Add lead"));
  }
  window.OCGSShell = {
    Sidebar,
    Topbar,
    NAV
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/CrmScreen.jsx
try { (() => {
/* Leads & CRM screen with customer drawer. window.OCGSScreens.Crm */
(function () {
  const NS = window.OrlandoCleaningGrowthSystemDesignSystem_e087c1;
  const {
    Card,
    Table,
    Badge,
    Button,
    Avatar,
    Tabs,
    Tag,
    IconButton,
    Tabs: _T
  } = NS;
  const {
    Tabs: TabsC
  } = NS;
  const I = window.OCGSIcons;
  const D = window.OCGSData;
  const money = n => '$' + n.toLocaleString('en-US');
  function Drawer({
    lead,
    onClose
  }) {
    const [tab, setTab] = React.useState('overview');
    if (!lead) return null;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        inset: 0,
        zIndex: 40,
        display: 'flex',
        justifyContent: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: onClose,
      style: {
        position: 'absolute',
        inset: 0,
        background: 'rgba(12,33,56,0.32)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: 460,
        maxWidth: '92vw',
        height: '100%',
        background: 'var(--surface-card)',
        boxShadow: 'var(--shadow-xl)',
        display: 'flex',
        flexDirection: 'column',
        animation: 'slideIn .22s cubic-bezier(.22,1,.36,1)'
      }
    }, /*#__PURE__*/React.createElement("style", null, `@keyframes slideIn{from{transform:translateX(30px);opacity:.4}to{transform:none;opacity:1}}`), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 'var(--space-6)',
        borderBottom: '1px solid var(--border)',
        display: 'flex',
        gap: 14,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: lead.name,
      size: "lg"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 'var(--text-xl)',
        color: 'var(--navy-900)'
      }
    }, lead.name), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        color: 'var(--text-muted)',
        fontSize: 'var(--text-sm)',
        marginTop: 3
      }
    }, /*#__PURE__*/React.createElement(I.mapPin, {
      size: 14
    }), " ", lead.city, ", FL \xB7 ", lead.type), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      status: lead.status,
      dot: true
    }))), /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      style: {
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        color: 'var(--text-muted)',
        fontSize: 22,
        lineHeight: 1,
        padding: 4
      }
    }, "\xD7")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        padding: 'var(--space-4) var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm",
      leadingIcon: /*#__PURE__*/React.createElement(I.phone, {
        size: 15
      })
    }, "Call"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      leadingIcon: /*#__PURE__*/React.createElement(I.mail, {
        size: 15
      })
    }, "Email"), /*#__PURE__*/React.createElement(Button, {
      variant: "success",
      size: "sm",
      leadingIcon: /*#__PURE__*/React.createElement(I.calendar, {
        size: 15
      })
    }, "Book job")), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement(TabsC, {
      value: tab,
      onChange: setTab,
      tabs: [{
        id: 'overview',
        label: 'Overview'
      }, {
        id: 'quotes',
        label: 'Quotes',
        count: lead.quote ? 1 : 0
      }, {
        id: 'jobs',
        label: 'Jobs',
        count: lead.status === 'active' || lead.status === 'booked' ? 2 : 0
      }, {
        id: 'notes',
        label: 'Notes'
      }]
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 'var(--space-6)',
        overflowY: 'auto',
        flex: 1
      }
    }, tab === 'overview' && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 14
      }
    }, [['Total revenue', money(lead.quote * 3 || 0)], ['Lead source', lead.source], ['Customer type', lead.type], ['Created', lead.created]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
      key: k
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--text-xs)',
        color: 'var(--text-muted)',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '.05em'
      }
    }, k), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--text-md)',
        color: 'var(--navy-900)',
        fontWeight: 600,
        marginTop: 2
      }
    }, v)))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: 'var(--border)'
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        color: 'var(--navy-900)',
        marginBottom: 8
      }
    }, "Follow-up reminder"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: 12,
        background: 'var(--amber-50)',
        border: '1px solid var(--amber-100)',
        borderRadius: 'var(--radius-md)',
        fontSize: 'var(--text-sm)',
        color: 'var(--amber-600)',
        fontWeight: 600
      }
    }, /*#__PURE__*/React.createElement(I.clock, {
      size: 16
    }), " Call back before Fri Jun 20"))), tab === 'quotes' && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, lead.quote ? /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 16,
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-md)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        color: 'var(--navy-900)',
        fontFamily: 'var(--font-display)'
      }
    }, lead.type, " cleaning"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontWeight: 600,
        color: 'var(--navy-900)'
      }
    }, money(lead.quote), "\u2013", money(lead.quote + 60))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--text-sm)',
        color: 'var(--text-muted)',
        marginTop: 4
      }
    }, "Sent ", lead.created, " \xB7 ", lead.source)) : /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--text-muted)',
        fontSize: 'var(--text-sm)'
      }
    }, "No quotes yet.")), tab === 'jobs' && /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--text-muted)',
        fontSize: 'var(--text-sm)'
      }
    }, "Job history appears here once jobs are booked."), tab === 'notes' && /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--text-muted)',
        fontSize: 'var(--text-sm)'
      }
    }, "\u201CPrefers eco-friendly products. Two cats. Gate code 4417.\u201D"))));
  }
  function Crm() {
    const [tab, setTab] = React.useState('all');
    const [sel, setSel] = React.useState(null);
    const counts = D.leads.reduce((a, l) => {
      a[l.status] = (a[l.status] || 0) + 1;
      return a;
    }, {});
    const tabs = [{
      id: 'all',
      label: 'All',
      count: D.leads.length
    }, {
      id: 'new lead',
      label: 'New',
      count: counts['new lead'] || 0
    }, {
      id: 'quoted',
      label: 'Quoted',
      count: counts['quoted'] || 0
    }, {
      id: 'booked',
      label: 'Booked',
      count: counts['booked'] || 0
    }, {
      id: 'active',
      label: 'Active',
      count: counts['active'] || 0
    }, {
      id: 'lost',
      label: 'Lost',
      count: counts['lost'] || 0
    }];
    const rows = tab === 'all' ? D.leads : D.leads.filter(l => l.status === tab);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement(TabsC, {
      value: tab,
      onChange: setTab,
      tabs: tabs,
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      leadingIcon: /*#__PURE__*/React.createElement(I.filter, {
        size: 15
      })
    }, "Filter")), /*#__PURE__*/React.createElement(Table, {
      onRowClick: setSel,
      columns: [{
        key: 'name',
        header: 'Customer',
        render: v => /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 10
          }
        }, /*#__PURE__*/React.createElement(Avatar, {
          name: v,
          size: "sm"
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            fontWeight: 600,
            color: 'var(--navy-900)'
          }
        }, v))
      }, {
        key: 'city',
        header: 'City'
      }, {
        key: 'type',
        header: 'Type'
      }, {
        key: 'source',
        header: 'Source'
      }, {
        key: 'quote',
        header: 'Quote',
        align: 'right',
        render: v => v ? /*#__PURE__*/React.createElement("span", {
          style: {
            fontVariantNumeric: 'tabular-nums',
            fontWeight: 600,
            color: 'var(--navy-900)'
          }
        }, money(v)) : /*#__PURE__*/React.createElement("span", {
          style: {
            color: 'var(--text-faint)'
          }
        }, "\u2014")
      }, {
        key: 'status',
        header: 'Status',
        render: v => /*#__PURE__*/React.createElement(Badge, {
          status: v
        })
      }, {
        key: 'created',
        header: 'Created',
        align: 'right',
        render: v => /*#__PURE__*/React.createElement("span", {
          style: {
            color: 'var(--text-muted)',
            fontSize: 'var(--text-sm)'
          }
        }, v)
      }],
      rows: rows
    }), /*#__PURE__*/React.createElement(Drawer, {
      lead: sel,
      onClose: () => setSel(null)
    }));
  }
  window.OCGSScreens = window.OCGSScreens || {};
  window.OCGSScreens.Crm = Crm;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/CrmScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/DashboardScreen.jsx
try { (() => {
/* Dashboard screen. window.OCGSScreens.Dashboard */
(function () {
  const NS = window.OrlandoCleaningGrowthSystemDesignSystem_e087c1;
  const {
    StatCard,
    Card,
    CardHeader,
    Table,
    Badge,
    Meter,
    Button
  } = NS;
  const I = window.OCGSIcons;
  const D = window.OCGSData;
  const money = n => '$' + n.toLocaleString('en-US');
  function MiniBars() {
    const max = Math.max(...D.monthly.map(d => d.v));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        gap: 14,
        height: 150,
        padding: '8px 4px 0'
      }
    }, D.monthly.map((d, i) => {
      const last = i === D.monthly.length - 1;
      return /*#__PURE__*/React.createElement("div", {
        key: d.m,
        style: {
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 'var(--text-2xs)',
          fontWeight: 700,
          color: last ? 'var(--green-700)' : 'var(--text-faint)',
          fontVariantNumeric: 'tabular-nums'
        }
      }, (d.v / 1000).toFixed(1), "k"), /*#__PURE__*/React.createElement("div", {
        style: {
          width: '100%',
          height: `${d.v / max * 110}px`,
          borderRadius: '6px 6px 0 0',
          background: last ? 'var(--green-500)' : 'var(--brand-200)'
        }
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 'var(--text-2xs)',
          color: 'var(--text-muted)',
          fontWeight: 600
        }
      }, d.m));
    }));
  }
  function Dashboard() {
    const s = D.stats;
    const upcoming = D.jobs.filter(j => j.status !== 'completed');
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement(StatCard, {
      label: "Revenue this month",
      value: money(s.revenueMonth),
      delta: "+12%",
      trend: "up",
      tone: "success",
      icon: /*#__PURE__*/React.createElement(I.dollar, {
        size: 18
      })
    }), /*#__PURE__*/React.createElement(StatCard, {
      label: "New leads this week",
      value: s.leadsWeek,
      delta: "+5",
      trend: "up",
      tone: "brand",
      icon: /*#__PURE__*/React.createElement(I.users, {
        size: 18
      })
    }), /*#__PURE__*/React.createElement(StatCard, {
      label: "Pending quotes",
      value: s.pendingQuotes,
      tone: "warning",
      icon: /*#__PURE__*/React.createElement(I.calculator, {
        size: 18
      }),
      hint: "3 awaiting follow-up"
    }), /*#__PURE__*/React.createElement(StatCard, {
      label: "Estimated profit",
      value: money(s.profit),
      delta: "+8%",
      trend: "up",
      tone: "navy",
      icon: /*#__PURE__*/React.createElement(I.trendingUp, {
        size: 18
      })
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.5fr 1fr',
        gap: 'var(--space-6)',
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
      title: "Monthly revenue",
      subtitle: "Last 6 months",
      action: /*#__PURE__*/React.createElement(Badge, {
        tone: "success",
        dot: true
      }, "Trending up")
    }), /*#__PURE__*/React.createElement(MiniBars, null)), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
      title: "Revenue by service",
      subtitle: "Share of this month"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, D.revenueByService.map((r, i) => /*#__PURE__*/React.createElement(Meter, {
      key: r.label,
      value: r.value,
      valueLabel: r.value + '%',
      label: r.label,
      tone: ['success', 'brand', 'navy', 'warning', 'navy'][i]
    }))))), /*#__PURE__*/React.createElement(Card, {
      padding: "none"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 'var(--space-5) var(--space-6) 0'
      }
    }, /*#__PURE__*/React.createElement(CardHeader, {
      title: "Upcoming jobs",
      subtitle: `${upcoming.length} scheduled`,
      action: /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        size: "sm",
        trailingIcon: /*#__PURE__*/React.createElement(I.arrowRight, {
          size: 15
        })
      }, "View calendar")
    })), /*#__PURE__*/React.createElement(Table, {
      style: {
        border: 'none',
        borderRadius: 0,
        boxShadow: 'none'
      },
      columns: [{
        key: 'date',
        header: 'When',
        render: (v, r) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          style: {
            fontWeight: 600,
            color: 'var(--navy-900)'
          }
        }, v), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 'var(--text-xs)',
            color: 'var(--text-muted)'
          }
        }, r.time))
      }, {
        key: 'customer',
        header: 'Customer'
      }, {
        key: 'type',
        header: 'Service'
      }, {
        key: 'sub',
        header: 'Subcontractor'
      }, {
        key: 'price',
        header: 'Price',
        align: 'right',
        render: v => /*#__PURE__*/React.createElement("span", {
          style: {
            fontVariantNumeric: 'tabular-nums',
            fontWeight: 600,
            color: 'var(--navy-900)'
          }
        }, money(v))
      }, {
        key: 'status',
        header: 'Status',
        render: v => /*#__PURE__*/React.createElement(Badge, {
          status: v
        })
      }],
      rows: upcoming
    })));
  }
  window.OCGSScreens = window.OCGSScreens || {};
  window.OCGSScreens.Dashboard = Dashboard;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/DashboardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Icons.jsx
try { (() => {
/* Lucide-style outline icons (1.6px stroke, rounded) as a small React set.
   Matches the brand's Lucide iconography. Exposed on window for the kit. */
(function () {
  const Icon = ({
    d,
    size = 20,
    paths,
    fill,
    ...rest
  }) => React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    ...rest
  }, paths);
  const P = d => React.createElement('path', {
    d,
    key: d
  });
  const make = (...ds) => props => Icon({
    ...props,
    paths: ds.map(P)
  });
  const raw = children => props => Icon({
    ...props,
    paths: children
  });
  const Icons = {
    dashboard: make('M3 13h8V3H3zM13 21h8v-10h-8zM13 3v6h8V3zM3 21h8v-6H3z'),
    users: raw([React.createElement('circle', {
      cx: 9,
      cy: 8,
      r: 3.2,
      key: 'c'
    }), P('M2.5 20c.6-3.4 3-5.2 6.5-5.2s5.9 1.8 6.5 5.2'), P('M16 5.2A3 3 0 0 1 16 11'), P('M18 14.4c2.3.5 3.7 2 4 5.6')]),
    calculator: raw([React.createElement('rect', {
      x: 4,
      y: 2.5,
      width: 16,
      height: 19,
      rx: 2.5,
      key: 'r'
    }), P('M8 6.5h8'), P('M8 11h.01M12 11h.01M16 11h.01M8 14.5h.01M12 14.5h.01M16 14.5h.01M8 18h.01M12 18h.01M16 18h.01')]),
    calendar: raw([React.createElement('rect', {
      x: 3.5,
      y: 5,
      width: 17,
      height: 16,
      rx: 2.5,
      key: 'r'
    }), P('M3.5 10h17M8 3v4M16 3v4')]),
    briefcase: raw([React.createElement('rect', {
      x: 3,
      y: 7.5,
      width: 18,
      height: 12.5,
      rx: 2.5,
      key: 'r'
    }), P('M8 7.5V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5M3 13h18')]),
    megaphone: make('M3 11v2a1 1 0 0 0 1 1h2l9 5V5L6 10H4a1 1 0 0 0-1 1z', 'M18 8a4 4 0 0 1 0 8'),
    dollar: make('M12 2v20', 'M16 6.5C16 4.6 14.2 3.5 12 3.5S8 4.7 8 6.8C8 11 16 9.8 16 14c0 2.1-1.8 3.3-4 3.3S8 16.2 8 14.3'),
    map: raw([P('M9 4.5 3.5 6.7v12.8L9 17.3l6 2.2 5.5-2.2V4.5L15 6.7z'), P('M9 4.5v12.8M15 6.7v12.8')]),
    settings: raw([React.createElement('circle', {
      cx: 12,
      cy: 12,
      r: 3,
      key: 'c'
    }), P('M19.4 13.5a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-2.9 1.2V21a2 2 0 0 1-4 0v-.1A1.7 1.7 0 0 0 6.2 19l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0-1.1-2.9H2a2 2 0 0 1 0-4h.1A1.7 1.7 0 0 0 3.2 6.2l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H8a1.7 1.7 0 0 0 1-1.6V2a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 2.9 1.1l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V8a1.7 1.7 0 0 0 1.6 1H22a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z')]),
    plus: make('M12 5v14M5 12h14'),
    search: raw([React.createElement('circle', {
      cx: 11,
      cy: 11,
      r: 7,
      key: 'c'
    }), P('M21 21l-4.3-4.3')]),
    bell: make('M18 8.5a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9', 'M13.7 21a2 2 0 0 1-3.4 0'),
    chevronDown: make('M6 9l6 6 6-6'),
    chevronRight: make('M9 6l6 6-6 6'),
    arrowUp: make('M12 19V5M5 12l7-7 7 7'),
    arrowRight: make('M5 12h14M13 6l6 6-6 6'),
    phone: make('M6.6 3.5 4 4.3a2 2 0 0 0-1.3 2.4 18 18 0 0 0 12.6 12.6 2 2 0 0 0 2.4-1.3l.8-2.6a1.5 1.5 0 0 0-.9-1.8l-3-1.1a1.5 1.5 0 0 0-1.6.4l-1 1A14 14 0 0 1 8 9l1-1a1.5 1.5 0 0 0 .4-1.6l-1.1-3a1.5 1.5 0 0 0-1.7-.9z'),
    mail: raw([React.createElement('rect', {
      x: 3,
      y: 5,
      width: 18,
      height: 14,
      rx: 2.5,
      key: 'r'
    }), P('M3.5 6.5l8.5 6 8.5-6')]),
    mapPin: raw([P('M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z'), React.createElement('circle', {
      cx: 12,
      cy: 10,
      r: 2.6,
      key: 'c'
    })]),
    sparkles: make('M12 3l1.7 4.6L18 9l-4.3 1.4L12 15l-1.7-4.6L6 9l4.3-1.4z', 'M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8z'),
    home: make('M3 11l9-7 9 7', 'M5 10v10h14V10'),
    check: make('M5 12.5l4.5 4.5L19 7'),
    clock: raw([React.createElement('circle', {
      cx: 12,
      cy: 12,
      r: 8.5,
      key: 'c'
    }), P('M12 7.5V12l3 2')]),
    filter: make('M3 5h18l-7 8v6l-4 2v-8z'),
    dots: raw([React.createElement('circle', {
      cx: 5,
      cy: 12,
      r: 1.4,
      key: 'a'
    }), React.createElement('circle', {
      cx: 12,
      cy: 12,
      r: 1.4,
      key: 'b'
    }), React.createElement('circle', {
      cx: 19,
      cy: 12,
      r: 1.4,
      key: 'c'
    })]),
    facebook: make('M14 9h2.5V5.5H14c-2 0-3.5 1.5-3.5 3.5v2H8v3.5h2.5V21h3.5v-6.5h2.5L17 11h-3V9z'),
    instagram: raw([React.createElement('rect', {
      x: 3.5,
      y: 3.5,
      width: 17,
      height: 17,
      rx: 5,
      key: 'r'
    }), React.createElement('circle', {
      cx: 12,
      cy: 12,
      r: 4,
      key: 'c'
    }), P('M17 7h.01')]),
    trendingUp: make('M3 16.5l5.5-5.5 4 4L21 7.5', 'M16 7.5h5v5')
  };
  window.OCGSIcons = Icons;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/MarketingScreens.jsx
try { (() => {
/* Marketing studio + Local SEO screens. */
(function () {
  const NS = window.OrlandoCleaningGrowthSystemDesignSystem_e087c1;
  const {
    Card,
    CardHeader,
    Field,
    Select,
    Button,
    Badge,
    Tabs,
    Alert
  } = NS;
  const I = window.OCGSIcons;
  const D = window.OCGSData;
  const PLATFORMS = [{
    id: 'facebook',
    label: 'Facebook ad',
    icon: 'facebook'
  }, {
    id: 'instagram',
    label: 'Instagram caption',
    icon: 'instagram'
  }, {
    id: 'gbp',
    label: 'Google Business post',
    icon: 'mapPin'
  }, {
    id: 'email',
    label: 'Email follow-up',
    icon: 'mail'
  }, {
    id: 'sms',
    label: 'SMS',
    icon: 'phone'
  }];
  const COPY = {
    facebook: (a, t) => `🧼 ${t} homeowners in Winter Park — your weekends are for relaxing, not scrubbing.\n\nOrlando Cleaning Growth System pairs you with a vetted local cleaner who treats your home like their own. Deep clean, recurring, or move-out — booked in 60 seconds.\n\n✅ Background-checked pros\n✅ Flat, upfront pricing\n✅ Satisfaction guaranteed\n\n👉 Get your instant quote today. First recurring clean 20% off.`,
    instagram: a => `That just-cleaned feeling, every week. ✨\nServing Winter Park, Lake Nona & Kissimmee. Tap the link for an instant quote — booked in under a minute. 🏡🫧\n\n#OrlandoCleaning #WinterParkFL #LakeNona #MaidService #CleanHomeHappyHome`,
    gbp: () => `New customers this month! 🎉 Now booking deep cleans and recurring service across the Orlando metro. Mention this post for 20% off your first recurring clean. Instant online quotes available — no waiting on a callback.`,
    email: a => `Hi {{first_name}},\n\nThanks for requesting a quote! Based on your home we estimated $240–$300 for a deep clean. We'd love to get you on the schedule this week.\n\nReply to this email or tap below to pick a time — your first recurring clean is 20% off.\n\n— Diana, Orlando Cleaning`,
    sms: () => `Hi {{first_name}}! It's Diana from Orlando Cleaning 🧼 Your deep-clean quote is ready: $240–$300. Want me to hold a Saturday slot? Reply YES and I'll lock it in.`
  };
  function Marketing() {
    const [avatar, setAvatar] = React.useState('Busy working mom');
    const [service, setService] = React.useState('Deep cleaning');
    const [offer, setOffer] = React.useState('20% off first recurring clean');
    const [tone, setTone] = React.useState('Friendly');
    const [platform, setPlatform] = React.useState('facebook');
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '340px 1fr',
        gap: 'var(--space-6)',
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
      title: "Campaign setup"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Customer avatar"
    }, /*#__PURE__*/React.createElement(Select, {
      value: avatar,
      onChange: e => setAvatar(e.target.value),
      options: D.avatars
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Service type"
    }, /*#__PURE__*/React.createElement(Select, {
      value: service,
      onChange: e => setService(e.target.value),
      options: ['Standard cleaning', 'Deep cleaning', 'Move-out cleaning', 'Airbnb turnover', 'Recurring maid service']
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Offer"
    }, /*#__PURE__*/React.createElement(Select, {
      value: offer,
      onChange: e => setOffer(e.target.value),
      options: ['20% off first recurring clean', '$50 off deep clean', 'Free fridge & oven add-on', 'Refer a friend, get $25']
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Tone"
    }, /*#__PURE__*/React.createElement(Select, {
      value: tone,
      onChange: e => setTone(e.target.value),
      options: ['Professional', 'Friendly', 'Urgent', 'Luxury', 'Family-focused']
    })), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      fullWidth: true,
      leadingIcon: /*#__PURE__*/React.createElement(I.sparkles, {
        size: 16
      })
    }, "Generate content"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }
    }, PLATFORMS.map(p => {
      const on = p.id === platform;
      const Ico = I[p.icon];
      return /*#__PURE__*/React.createElement("button", {
        key: p.id,
        onClick: () => setPlatform(p.id),
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '8px 14px',
          cursor: 'pointer',
          borderRadius: 'var(--radius-pill)',
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          fontSize: 'var(--text-sm)',
          border: `1px solid ${on ? 'var(--brand-600)' : 'var(--border-strong)'}`,
          background: on ? 'var(--brand-600)' : 'var(--surface-card)',
          color: on ? '#fff' : 'var(--gray-700)'
        }
      }, /*#__PURE__*/React.createElement(Ico, {
        size: 15
      }), p.label);
    })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "brand",
      dot: true
    }, tone), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-sm)',
        color: 'var(--text-muted)'
      }
    }, avatar, " \xB7 ", service)), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      leadingIcon: /*#__PURE__*/React.createElement(I.check, {
        size: 15
      })
    }, "Copy")), /*#__PURE__*/React.createElement("div", {
      style: {
        whiteSpace: 'pre-wrap',
        fontSize: 'var(--text-md)',
        lineHeight: 1.6,
        color: 'var(--text-body)',
        background: 'var(--gray-50)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-md)',
        padding: 'var(--space-5)',
        minHeight: 200
      }
    }, COPY[platform](avatar, tone))), /*#__PURE__*/React.createElement(Alert, {
      tone: "success",
      title: "Saved to campaigns"
    }, "This draft was added to your Marketing campaigns library.")));
  }
  const SEO_BLOCKS = [{
    title: 'Local keywords',
    icon: 'search',
    items: ['house cleaning winter park fl', 'deep cleaning lake nona', 'move out cleaning orlando', 'airbnb turnover cleaning kissimmee', 'recurring maid service windermere']
  }, {
    title: 'Service-area page ideas',
    icon: 'map',
    items: ['House Cleaning in Winter Park', 'Lake Nona Recurring Maid Service', 'Move-Out Cleaning in Clermont', 'Airbnb Cleaning in Kissimmee']
  }, {
    title: 'Blog post ideas',
    icon: 'sparkles',
    items: ['How much does a deep clean cost in Orlando?', '7 things to clean before an Airbnb guest checks in', 'Move-out cleaning checklist for Florida renters']
  }, {
    title: 'Review request messages',
    icon: 'mail',
    items: ['Hi {{name}}, thanks for choosing us! A quick Google review helps our small Orlando team a ton 🙏']
  }];
  function Seo() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      accent: true
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "eyebrow"
    }, "Local SEO studio"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 'var(--text-2xl)',
        color: 'var(--navy-900)',
        marginTop: 4
      }
    }, "Get found across the Orlando metro")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Select, {
      options: ['All service areas', 'Winter Park', 'Lake Nona', 'Kissimmee', 'Windermere', 'Clermont'],
      style: {
        width: 200
      }
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      leadingIcon: /*#__PURE__*/React.createElement(I.sparkles, {
        size: 16
      })
    }, "Generate")))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--space-5)'
      }
    }, SEO_BLOCKS.map(b => {
      const Ico = I[b.icon];
      return /*#__PURE__*/React.createElement(Card, {
        key: b.title
      }, /*#__PURE__*/React.createElement(CardHeader, {
        title: /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            color: 'var(--brand-600)'
          }
        }, /*#__PURE__*/React.createElement(Ico, {
          size: 18
        })), b.title)
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }
      }, b.items.map(it => /*#__PURE__*/React.createElement("div", {
        key: it,
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 12,
          padding: '10px 12px',
          background: 'var(--gray-50)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-md)',
          fontSize: 'var(--text-sm)',
          color: 'var(--text-body)'
        }
      }, /*#__PURE__*/React.createElement("span", null, it), /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--text-faint)',
          flexShrink: 0
        }
      }, /*#__PURE__*/React.createElement(I.plus, {
        size: 15
      }))))));
    })));
  }
  window.OCGSScreens = window.OCGSScreens || {};
  Object.assign(window.OCGSScreens, {
    Marketing,
    Seo
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/MarketingScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/OpsScreens.jsx
try { (() => {
/* Jobs, Subcontractors, Financials screens. */
(function () {
  const NS = window.OrlandoCleaningGrowthSystemDesignSystem_e087c1;
  const {
    Card,
    CardHeader,
    Table,
    Badge,
    Button,
    Avatar,
    StatCard,
    Meter
  } = NS;
  const I = window.OCGSIcons;
  const D = window.OCGSData;
  const money = n => '$' + n.toLocaleString('en-US');
  function Jobs() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement(StatCard, {
      label: "Scheduled",
      value: "9",
      tone: "brand",
      icon: /*#__PURE__*/React.createElement(I.calendar, {
        size: 18
      })
    }), /*#__PURE__*/React.createElement(StatCard, {
      label: "In progress",
      value: "2",
      tone: "warning",
      icon: /*#__PURE__*/React.createElement(I.clock, {
        size: 18
      })
    }), /*#__PURE__*/React.createElement(StatCard, {
      label: "Completed (Jun)",
      value: "34",
      tone: "success",
      icon: /*#__PURE__*/React.createElement(I.check, {
        size: 18
      })
    }), /*#__PURE__*/React.createElement(StatCard, {
      label: "Contractor payouts",
      value: money(D.stats.payouts),
      tone: "navy",
      icon: /*#__PURE__*/React.createElement(I.dollar, {
        size: 18
      })
    })), /*#__PURE__*/React.createElement(Card, {
      padding: "none"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 'var(--space-5) var(--space-6) 0'
      }
    }, /*#__PURE__*/React.createElement(CardHeader, {
      title: "Job schedule",
      subtitle: "This week",
      action: /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        size: "sm",
        leadingIcon: /*#__PURE__*/React.createElement(I.plus, {
          size: 15
        })
      }, "New job")
    })), /*#__PURE__*/React.createElement(Table, {
      style: {
        border: 'none',
        borderRadius: 0,
        boxShadow: 'none'
      },
      columns: [{
        key: 'date',
        header: 'When',
        render: (v, r) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          style: {
            fontWeight: 600,
            color: 'var(--navy-900)'
          }
        }, v), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 'var(--text-xs)',
            color: 'var(--text-muted)'
          }
        }, r.time))
      }, {
        key: 'customer',
        header: 'Customer'
      }, {
        key: 'address',
        header: 'Address',
        render: v => /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 'var(--text-sm)',
            color: 'var(--text-muted)'
          }
        }, v)
      }, {
        key: 'sub',
        header: 'Subcontractor',
        render: v => /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 8
          }
        }, /*#__PURE__*/React.createElement(Avatar, {
          name: v,
          size: "xs"
        }), /*#__PURE__*/React.createElement("span", null, v))
      }, {
        key: 'price',
        header: 'Price',
        align: 'right',
        render: (v, r) => /*#__PURE__*/React.createElement("div", {
          style: {
            textAlign: 'right'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontVariantNumeric: 'tabular-nums',
            fontWeight: 600,
            color: 'var(--navy-900)'
          }
        }, money(v)), /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 'var(--text-xs)',
            color: 'var(--green-600)'
          }
        }, "payout ", money(r.payout)))
      }, {
        key: 'status',
        header: 'Status',
        render: v => /*#__PURE__*/React.createElement(Badge, {
          status: v
        })
      }],
      rows: D.jobs
    })));
  }
  function Subs() {
    return /*#__PURE__*/React.createElement(Card, {
      padding: "none"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 'var(--space-5) var(--space-6) 0'
      }
    }, /*#__PURE__*/React.createElement(CardHeader, {
      title: "Subcontractors",
      subtitle: "4 in your network",
      action: /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        size: "sm",
        leadingIcon: /*#__PURE__*/React.createElement(I.plus, {
          size: 15
        })
      }, "Add subcontractor")
    })), /*#__PURE__*/React.createElement(Table, {
      style: {
        border: 'none',
        borderRadius: 0,
        boxShadow: 'none'
      },
      columns: [{
        key: 'name',
        header: 'Name',
        render: v => /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 10
          }
        }, /*#__PURE__*/React.createElement(Avatar, {
          name: v,
          size: "sm"
        }), /*#__PURE__*/React.createElement("span", {
          style: {
            fontWeight: 600,
            color: 'var(--navy-900)'
          }
        }, v))
      }, {
        key: 'area',
        header: 'Service area'
      }, {
        key: 'rate',
        header: 'Pay rate',
        align: 'center'
      }, {
        key: 'jobs',
        header: 'Jobs',
        align: 'center',
        render: v => /*#__PURE__*/React.createElement("span", {
          style: {
            fontVariantNumeric: 'tabular-nums'
          }
        }, v)
      }, {
        key: 'rating',
        header: 'Rating',
        align: 'center',
        render: v => /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4,
            color: 'var(--amber-600)',
            fontWeight: 700
          }
        }, /*#__PURE__*/React.createElement(I.sparkles, {
          size: 14
        }), v)
      }, {
        key: 'status',
        header: 'Status',
        render: v => /*#__PURE__*/React.createElement(Badge, {
          status: v
        })
      }],
      rows: D.subs
    }));
  }
  function Finance() {
    const s = D.stats;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement(StatCard, {
      label: "Revenue",
      value: money(s.revenueMonth),
      tone: "success",
      icon: /*#__PURE__*/React.createElement(I.dollar, {
        size: 18
      }),
      delta: "+12%",
      trend: "up"
    }), /*#__PURE__*/React.createElement(StatCard, {
      label: "Expenses",
      value: money(s.expensesMonth),
      tone: "navy",
      icon: /*#__PURE__*/React.createElement(I.briefcase, {
        size: 18
      })
    }), /*#__PURE__*/React.createElement(StatCard, {
      label: "Net profit",
      value: money(s.profit),
      tone: "success",
      icon: /*#__PURE__*/React.createElement(I.trendingUp, {
        size: 18
      })
    }), /*#__PURE__*/React.createElement(StatCard, {
      label: "Profit margin",
      value: s.margin + '%',
      tone: "brand",
      icon: /*#__PURE__*/React.createElement(I.calculator, {
        size: 18
      })
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--space-6)',
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
      title: "Expense breakdown",
      subtitle: "June"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Meter, {
      label: "Contractor payouts",
      value: 61,
      valueLabel: money(10944),
      tone: "navy"
    }), /*#__PURE__*/React.createElement(Meter, {
      label: "Supplies",
      value: 9,
      valueLabel: money(1620),
      tone: "brand"
    }), /*#__PURE__*/React.createElement(Meter, {
      label: "Marketing spend",
      value: 8,
      valueLabel: money(1420),
      tone: "warning"
    }), /*#__PURE__*/React.createElement(Meter, {
      label: "Other",
      value: 5,
      valueLabel: money(900),
      tone: "brand"
    }))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
      title: "Revenue by city",
      subtitle: "June"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Meter, {
      label: "Winter Park",
      value: 34,
      valueLabel: money(6200),
      tone: "success"
    }), /*#__PURE__*/React.createElement(Meter, {
      label: "Lake Nona",
      value: 27,
      valueLabel: money(4920),
      tone: "success"
    }), /*#__PURE__*/React.createElement(Meter, {
      label: "Kissimmee",
      value: 19,
      valueLabel: money(3460),
      tone: "success"
    }), /*#__PURE__*/React.createElement(Meter, {
      label: "Windermere \xB7 Clermont",
      value: 20,
      valueLabel: money(3660),
      tone: "success"
    })))));
  }
  window.OCGSScreens = window.OCGSScreens || {};
  Object.assign(window.OCGSScreens, {
    Jobs,
    Subs,
    Finance
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/OpsScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/QuoteScreen.jsx
try { (() => {
/* Online quote calculator (internal tool view). window.OCGSScreens.Quote */
(function () {
  const NS = window.OrlandoCleaningGrowthSystemDesignSystem_e087c1;
  const {
    Card,
    CardHeader,
    Field,
    Input,
    Select,
    Textarea,
    Checkbox,
    Button,
    Badge,
    Alert
  } = NS;
  const I = window.OCGSIcons;
  const TYPES = {
    'Standard cleaning': {
      mult: 1,
      fixed: 0
    },
    'Deep cleaning': {
      mult: 1.5,
      fixed: 0
    },
    'Move-in / move-out': {
      mult: 1.6,
      fixed: 0
    },
    'Airbnb turnover': {
      mult: 1,
      fixed: 165
    },
    'Post-construction': {
      mult: 2.0,
      fixed: 0
    }
  };
  const FREQ = {
    'One-time': 0,
    'Weekly': 0.15,
    'Biweekly': 0.10,
    'Monthly': 0.05
  };
  const ADDONS = {
    'Inside fridge': 35,
    'Inside oven': 35,
    'Interior windows': 60,
    'Laundry': 25,
    'Dishes': 15,
    'Inside cabinets': 45,
    'Garage sweep': 30,
    'Patio cleaning': 40
  };
  function Quote() {
    const [sqft, setSqft] = React.useState(2000);
    const [beds, setBeds] = React.useState(3);
    const [baths, setBaths] = React.useState(2);
    const [type, setType] = React.useState('Deep cleaning');
    const [freq, setFreq] = React.useState('Biweekly');
    const [pets, setPets] = React.useState(true);
    const [addons, setAddons] = React.useState({
      'Inside fridge': true,
      'Interior windows': true
    });
    const calc = React.useMemo(() => {
      const t = TYPES[type];
      let base = 120 + sqft * 0.05 + beds * 15 + baths * 20;
      base = t.fixed ? t.fixed + sqft * 0.03 : base * t.mult;
      if (pets) base += 20;
      const addonTotal = Object.keys(addons).filter(k => addons[k]).reduce((s, k) => s + ADDONS[k], 0);
      let total = base + addonTotal;
      const disc = FREQ[freq];
      const discounted = total * (1 - disc);
      return {
        low: Math.round(discounted / 5) * 5,
        high: Math.round(discounted * 1.18 / 5) * 5,
        disc,
        addonTotal
      };
    }, [sqft, beds, baths, type, freq, pets, addons]);
    const money = n => '$' + n.toLocaleString('en-US');
    const toggle = k => setAddons(a => ({
      ...a,
      [k]: !a[k]
    }));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.6fr 1fr',
        gap: 'var(--space-6)',
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
      title: "Build a quote",
      subtitle: "Fill in the details \u2014 the estimate updates live"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--space-5) var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Home square footage"
    }, /*#__PURE__*/React.createElement(Input, {
      type: "number",
      value: sqft,
      onChange: e => setSqft(+e.target.value || 0),
      trailing: "sq ft"
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Cleaning type"
    }, /*#__PURE__*/React.createElement(Select, {
      value: type,
      onChange: e => setType(e.target.value),
      options: Object.keys(TYPES)
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Bedrooms"
    }, /*#__PURE__*/React.createElement(Input, {
      type: "number",
      value: beds,
      onChange: e => setBeds(+e.target.value || 0)
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Bathrooms"
    }, /*#__PURE__*/React.createElement(Input, {
      type: "number",
      value: baths,
      onChange: e => setBaths(+e.target.value || 0)
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Frequency"
    }, /*#__PURE__*/React.createElement(Select, {
      value: freq,
      onChange: e => setFreq(e.target.value),
      options: Object.keys(FREQ)
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Preferred date"
    }, /*#__PURE__*/React.createElement(Input, {
      type: "text",
      placeholder: "Sat, Jun 21"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'var(--text-sm)',
        color: 'var(--navy-900)',
        marginBottom: 12
      }
    }, "Add-ons"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '10px 20px'
      }
    }, Object.keys(ADDONS).map(k => /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Checkbox, {
      checked: !!addons[k],
      onChange: () => toggle(k),
      label: k
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-sm)',
        color: 'var(--text-muted)'
      }
    }, "+$", ADDONS[k]))))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--space-6)',
        display: 'flex',
        alignItems: 'center',
        gap: 24
      }
    }, /*#__PURE__*/React.createElement(Checkbox, {
      checked: pets,
      onChange: setPets,
      label: "Pets in home (+$20)"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'sticky',
        top: 'calc(var(--topbar-height) + var(--space-6))',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      accent: true
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-xs)',
        fontWeight: 700,
        letterSpacing: '.08em',
        textTransform: 'uppercase',
        color: 'var(--accent)'
      }
    }, "Estimated price"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 8,
        margin: '8px 0 4px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 'var(--text-4xl)',
        color: 'var(--navy-900)',
        letterSpacing: '-0.02em',
        fontVariantNumeric: 'tabular-nums'
      }
    }, money(calc.low)), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-muted)',
        fontWeight: 600
      }
    }, "\u2013 ", money(calc.high))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--text-sm)',
        color: 'var(--text-muted)',
        marginBottom: 16
      }
    }, type, " \xB7 ", freq), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 7,
        fontSize: 'var(--text-sm)',
        borderTop: '1px solid var(--border)',
        paddingTop: 14
      }
    }, /*#__PURE__*/React.createElement(Row, {
      k: `${type}`,
      v: `${TYPES[type].fixed ? 'flat' : '×' + TYPES[type].mult}`
    }), /*#__PURE__*/React.createElement(Row, {
      k: "Add-ons",
      v: '+$' + calc.addonTotal
    }), calc.disc > 0 && /*#__PURE__*/React.createElement(Row, {
      k: `${freq} discount`,
      v: '−' + Math.round(calc.disc * 100) + '%',
      green: true
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        marginTop: 18
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "success",
      fullWidth: true,
      leadingIcon: /*#__PURE__*/React.createElement(I.calendar, {
        size: 16
      })
    }, "Book a call"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      fullWidth: true,
      leadingIcon: /*#__PURE__*/React.createElement(I.mail, {
        size: 16
      })
    }, "Email this quote"))), /*#__PURE__*/React.createElement(Alert, {
      tone: "info"
    }, "Lead auto-saved to CRM and the quote is logged on submit.")));
  }
  function Row({
    k,
    v,
    green
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-body)'
      }
    }, k), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontWeight: 600,
        color: green ? 'var(--green-600)' : 'var(--navy-900)'
      }
    }, v));
  }
  window.OCGSScreens = window.OCGSScreens || {};
  window.OCGSScreens.Quote = Quote;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/QuoteScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/data.js
try { (() => {
/* Mock data for the Orlando Cleaning Growth System app UI kit. */
window.OCGSData = {
  stats: {
    leadsTotal: 312,
    leadsWeek: 14,
    pendingQuotes: 7,
    bookedJobs: 23,
    completedJobs: 188,
    revenueMonth: 18240,
    expensesMonth: 12364,
    profit: 5876,
    payouts: 10944,
    margin: 32
  },
  leads: [{
    id: 'L-1042',
    name: 'Maria Lopez',
    city: 'Winter Park',
    type: 'Recurring',
    source: 'Landing page',
    status: 'booked',
    quote: 240,
    created: 'Jun 18'
  }, {
    id: 'L-1041',
    name: 'James Carter',
    city: 'Lake Nona',
    type: 'Deep clean',
    source: 'Google',
    status: 'quoted',
    quote: 310,
    created: 'Jun 18'
  }, {
    id: 'L-1040',
    name: 'Sunset Stays Airbnb',
    city: 'Kissimmee',
    type: 'Turnover',
    source: 'Referral',
    status: 'active',
    quote: 165,
    created: 'Jun 17'
  }, {
    id: 'L-1039',
    name: 'Dana Whitfield',
    city: 'Windermere',
    type: 'Move-out',
    source: 'Facebook',
    status: 'new lead',
    quote: 0,
    created: 'Jun 17'
  }, {
    id: 'L-1038',
    name: 'Priya Nair',
    city: 'Clermont',
    type: 'Standard',
    source: 'Landing page',
    status: 'quoted',
    quote: 145,
    created: 'Jun 16'
  }, {
    id: 'L-1037',
    name: 'Robert Hughes',
    city: 'Orlando',
    type: 'Post-construction',
    source: 'Google',
    status: 'lost',
    quote: 0,
    created: 'Jun 15'
  }, {
    id: 'L-1036',
    name: 'Aisha Bell',
    city: 'Winter Park',
    type: 'Recurring',
    source: 'Referral',
    status: 'active',
    quote: 220,
    created: 'Jun 14'
  }, {
    id: 'L-1035',
    name: 'Tom & Lily Reed',
    city: 'Lake Nona',
    type: 'Deep clean',
    source: 'Instagram',
    status: 'booked',
    quote: 295,
    created: 'Jun 13'
  }],
  jobs: [{
    id: 'J-508',
    customer: 'Maria Lopez',
    address: '418 Aloma Ave, Winter Park',
    type: 'Recurring',
    date: 'Sat Jun 21',
    time: '9:00 AM',
    sub: 'James C.',
    price: 240,
    payout: 144,
    status: 'scheduled'
  }, {
    id: 'J-507',
    customer: 'Sunset Stays Airbnb',
    address: '92 Celebration Blvd, Kissimmee',
    type: 'Turnover',
    date: 'Sat Jun 21',
    time: '11:30 AM',
    sub: 'Brenda M.',
    price: 165,
    payout: 99,
    status: 'scheduled'
  }, {
    id: 'J-506',
    customer: 'Tom & Lily Reed',
    address: '7 Tavistock Lakes, Lake Nona',
    type: 'Deep clean',
    date: 'Fri Jun 20',
    time: '1:00 PM',
    sub: 'James C.',
    price: 295,
    payout: 177,
    status: 'in progress'
  }, {
    id: 'J-505',
    customer: 'Aisha Bell',
    address: '210 Park Ave N, Winter Park',
    type: 'Recurring',
    date: 'Thu Jun 19',
    time: '10:00 AM',
    sub: 'Carlos R.',
    price: 220,
    payout: 132,
    status: 'completed'
  }, {
    id: 'J-504',
    customer: 'Priya Nair',
    address: '55 Lakeshore Dr, Clermont',
    type: 'Standard',
    date: 'Wed Jun 18',
    time: '2:00 PM',
    sub: 'Brenda M.',
    price: 145,
    payout: 87,
    status: 'completed'
  }],
  subs: [{
    id: 'S-1',
    name: 'James Carter',
    area: 'Winter Park · Lake Nona',
    rate: '60%',
    jobs: 142,
    rating: 4.9,
    status: 'active'
  }, {
    id: 'S-2',
    name: 'Brenda Mendez',
    area: 'Kissimmee · Clermont',
    rate: '60%',
    jobs: 98,
    rating: 4.8,
    status: 'active'
  }, {
    id: 'S-3',
    name: 'Carlos Rivera',
    area: 'Orlando · Windermere',
    rate: '55%',
    jobs: 64,
    rating: 4.7,
    status: 'active'
  }, {
    id: 'S-4',
    name: 'Tina Okafor',
    area: 'Lake Nona',
    rate: '60%',
    jobs: 31,
    rating: 4.9,
    status: 'inactive'
  }],
  revenueByService: [{
    label: 'Recurring',
    value: 38
  }, {
    label: 'Deep clean',
    value: 26
  }, {
    label: 'Move-out',
    value: 18
  }, {
    label: 'Airbnb turnover',
    value: 12
  }, {
    label: 'Post-construction',
    value: 6
  }],
  monthly: [{
    m: 'Jan',
    v: 9200
  }, {
    m: 'Feb',
    v: 10400
  }, {
    m: 'Mar',
    v: 12100
  }, {
    m: 'Apr',
    v: 13800
  }, {
    m: 'May',
    v: 15600
  }, {
    m: 'Jun',
    v: 18240
  }],
  avatars: ['Busy working mom', 'Airbnb host', 'Realtor', 'Property manager', 'Elderly homeowner', 'High-income homeowner', 'Move-out customer', 'New homeowner']
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Meter = __ds_scope.Meter;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
