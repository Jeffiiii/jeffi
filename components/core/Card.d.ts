import * as React from 'react';

/**
 * Rounded translucent surface with a soft pink-tinted shadow — the system's
 * default container.
 *
 * @startingPoint section="Core" subtitle="Glass / solid / tint / dark surfaces" viewport="700x220"
 */
export interface CardProps {
  children?: React.ReactNode;
  /** Surface treatment. @default 'glass' */
  tone?: 'glass' | 'solid' | 'tint' | 'dark' | 'surface';
  /** Lift + deepen shadow on hover. @default false */
  hover?: boolean;
  /** CSS padding. @default var(--space-6) */
  padding?: string;
  style?: React.CSSProperties;
}

/** Rounded translucent surface with a soft pink-tinted shadow. */
export function Card(props: CardProps): JSX.Element;
