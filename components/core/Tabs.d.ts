import * as React from 'react';

export interface TabItem { key: string; label: React.ReactNode; icon?: React.ReactNode; }

export interface TabsProps {
  items: TabItem[];
  value: string;
  onChange?: (key: string) => void;
  /** 'pill' = segmented glass, 'underline' = section nav. @default 'pill' */
  variant?: 'pill' | 'underline';
  /** Style for dark/plum surfaces. @default false */
  dark?: boolean;
  style?: React.CSSProperties;
}

/** Segmented (pill) or underline tab navigation. */
export function Tabs(props: TabsProps): JSX.Element;
