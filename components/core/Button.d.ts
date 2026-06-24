import * as React from 'react';

/**
 * Primary action control — sharp editorial button (solid fill, subtle shadow,
 * 2px lift on hover). No gradient or glow.
 *
 * @startingPoint section="Core" subtitle="Editorial button — primary, secondary, ghost, dark" viewport="700x180"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual style. @default 'primary' */
  variant?: 'primary' | 'secondary' | 'ghost' | 'dark';
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Optional leading icon node (emoji or Lucide svg). */
  icon?: React.ReactNode;
  /** Optional trailing icon node. */
  iconRight?: React.ReactNode;
  disabled?: boolean;
  /** Renders as an anchor when provided. */
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

/** Primary action control — pill-shaped, gentle lift on hover. */
export function Button(props: ButtonProps): JSX.Element;
