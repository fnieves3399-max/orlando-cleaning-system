import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  size?: 'sm' | 'md' | 'lg';
  invalid?: boolean;
  /** Leading adornment, e.g. "$" or an icon */
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
}

export function Input(props: InputProps): JSX.Element;
