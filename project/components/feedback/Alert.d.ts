import * as React from 'react';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: 'info' | 'success' | 'warning' | 'danger';
  title?: React.ReactNode;
  children?: React.ReactNode;
}

export function Alert(props: AlertProps): JSX.Element;
