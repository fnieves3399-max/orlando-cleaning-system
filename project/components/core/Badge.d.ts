import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Explicit tone (overrides status mapping) */
  tone?: 'neutral' | 'brand' | 'success' | 'warning' | 'danger';
  /** Lifecycle status — auto-mapped to a tone (e.g. "new lead", "booked", "lost") */
  status?: string;
  /** Show a leading status dot */
  dot?: boolean;
}

export function Badge(props: BadgeProps): JSX.Element;
