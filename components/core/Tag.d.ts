import * as React from 'react';

export interface TagProps {
  children?: React.ReactNode;
  /** Selected state — fills with the brand gradient. @default false */
  active?: boolean;
  /** Style for dark/plum surfaces. @default false */
  dark?: boolean;
  /** Makes the chip interactive (cursor + hover lift). */
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

/** Glass chip for hero tags, filters, and skills. Interactive when `onClick` is set. */
export function Tag(props: TagProps): JSX.Element;
