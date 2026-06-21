import * as React from 'react';

/**
 * Primary interactive button for the Orlando Cleaning Growth System.
 * @startingPoint section="Core" subtitle="Buttons, badges, avatars & cards" viewport="700x150"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'success' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
