import * as React from 'react';

export interface TabItem { id: string; label: React.ReactNode; count?: number; }

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  tabs?: TabItem[];
  value?: string;
  onChange?: (id: string) => void;
}

export function Tabs(props: TabsProps): JSX.Element;
