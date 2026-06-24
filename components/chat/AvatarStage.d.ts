import * as React from 'react';

/**
 * Clean dark window that frames Elysia's portrait image (or a monogram) as the
 * static stand-in for the Live2D rig — no cartoon faces.
 *
 * @startingPoint section="Chat" subtitle="Elysia avatar window — static poster fallback" viewport="420x360"
 */
export interface AvatarStageProps {
  /** Portrait image URL shown in the window (e.g. the model's icon.png). */
  poster?: string;
  /** Reserved for parity with Live2DStage. @default 'neutral' */
  emotion?: 'happy' | 'playful' | 'shy' | 'sad' | 'surprised' | 'neutral';
  /** Soft glow + lift. @default false */
  speaking?: boolean;
  /** Name shown on the label chip. @default 'Elysia' */
  name?: string;
  /** Show the LIVE indicator. @default false */
  live?: boolean;
  /** Stage height in px. @default 320 */
  height?: number;
  /** Overlay nodes (chips, controls) rendered above the avatar. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Dark window framing Elysia's animated face. */
export function AvatarStage(props: AvatarStageProps): JSX.Element;
