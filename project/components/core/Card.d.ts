import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Lift on hover (use for clickable cards) */
  interactive?: boolean;
  /** Brand-blue top accent rule */
  accent?: boolean;
}
export function Card(props: CardProps): JSX.Element;

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Right-aligned action node (button, menu, etc.) */
  action?: React.ReactNode;
}
export function CardHeader(props: CardHeaderProps): JSX.Element;
