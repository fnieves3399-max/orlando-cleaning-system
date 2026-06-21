import * as React from 'react';

export interface SelectOption { value: string; label: string; }

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  size?: 'sm' | 'md' | 'lg';
  invalid?: boolean;
  options?: (string | SelectOption)[];
  placeholder?: string;
}

export function Select(props: SelectProps): JSX.Element;
