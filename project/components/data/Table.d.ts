import * as React from 'react';

export interface TableColumn {
  key: string;
  header: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  width?: string | number;
  render?: (value: any, row: any) => React.ReactNode;
}

export interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: TableColumn[];
  rows?: any[];
  onRowClick?: (row: any) => void;
}

export function Table(props: TableProps): JSX.Element;
