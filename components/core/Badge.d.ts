import * as React from 'react';

export interface BadgeProps {
  children?: React.ReactNode;
  /** Color intent. @default 'brand' */
  tone?: 'brand' | 'jeffi' | 'lavender' | 'mint' | 'crystal' | 'success' | 'warning' | 'danger' | 'neutral';
  /** Filled vs soft-tinted. @default false */
  solid?: boolean;
  style?: React.CSSProperties;
}

/** Small status / category pill. Soft-tinted by default, `solid` for emphasis. */
export function Badge(props: BadgeProps): JSX.Element;
