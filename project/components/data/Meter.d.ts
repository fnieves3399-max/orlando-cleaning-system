import * as React from 'react';

export interface MeterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 0–100 */
  value?: number;
  tone?: 'brand' | 'success' | 'warning' | 'danger' | 'navy';
  label?: React.ReactNode;
  valueLabel?: React.ReactNode;
  height?: number;
}

export function Meter(props: MeterProps): JSX.Element;
