import * as React from 'react';

export interface IconButtonProps {
  /** Icon node — emoji, Unicode glyph, or a Lucide svg. */
  children?: React.ReactNode;
  /** Accessible label (also the tooltip). */
  label?: string;
  /** @default 'ghost' */
  variant?: 'solid' | 'glass' | 'ghost' | 'dark';
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Toggled/selected state (ghost & dark show a soft pink fill). */
  active?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

/** Circular icon-only control for UI chrome — play, send, mic, close, toggles. */
export function IconButton(props: IconButtonProps): JSX.Element;
