import * as React from 'react';

export interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** 'full' = mark + wordmark, 'mark' = icon tile only */
  variant?: 'full' | 'mark';
  /** Mark size in px (wordmark scales from this) */
  size?: number;
  /** 'color' for light backgrounds, 'light' for navy/dark backgrounds */
  tone?: 'color' | 'light';
}

export function Logo(props: LogoProps): JSX.Element;
