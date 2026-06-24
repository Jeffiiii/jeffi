import * as React from 'react';

export interface AvatarProps {
  /** Image URL. If omitted, `children` (emoji/glyph) shows on a soft gradient. */
  src?: string;
  children?: React.ReactNode;
  /** Pixel diameter. @default 56 */
  size?: number;
  /** Pink accent ring. @default false */
  ring?: boolean;
  /** Pink glow pulse (e.g. while Elysia speaks). @default false */
  speaking?: boolean;
  /** Status dot. */
  status?: 'online' | 'live' | 'away';
  style?: React.CSSProperties;
}

/** Circular avatar with optional pink ring, speaking glow, and status dot. */
export function Avatar(props: AvatarProps): JSX.Element;
