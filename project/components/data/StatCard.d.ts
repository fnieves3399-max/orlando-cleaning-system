import * as React from 'react';

/**
 * KPI tile for dashboards — label, big value, optional trend delta.
 * @startingPoint section="Dashboard" subtitle="KPI metric tiles" viewport="700x150"
 */
export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode;
  value?: React.ReactNode;
  /** Delta text, e.g. "+12%" */
  delta?: React.ReactNode;
  trend?: 'up' | 'down';
  icon?: React.ReactNode;
  tone?: 'brand' | 'success' | 'warning' | 'navy' | 'danger';
  hint?: React.ReactNode;
}

export function StatCard(props: StatCardProps): JSX.Element;
