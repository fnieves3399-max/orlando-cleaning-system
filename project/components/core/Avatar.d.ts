import * as React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Used for initials + deterministic color */
  name?: string;
  /** Optional image URL */
  src?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

export function Avatar(props: AvatarProps): JSX.Element;
