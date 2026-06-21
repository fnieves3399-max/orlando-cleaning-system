import * as React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'secondary' | 'ghost' | 'primary';
  /** Accessible label (icon-only buttons need this) */
  label?: string;
}

export function IconButton(props: IconButtonProps): JSX.Element;
