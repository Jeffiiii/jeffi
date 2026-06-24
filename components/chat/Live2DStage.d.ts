import * as React from 'react';

export interface Live2DStageProps {
  /** Relative URL to the .model3.json (default points at assets/live2d/changli.model3.json). */
  modelUrl?: string;
  /** Drives the model's expression (mapped onto its button expressions). @default 'neutral' */
  emotion?: 'happy' | 'playful' | 'shy' | 'sad' | 'surprised' | 'neutral' | 'angry';
  /** Animate ParamMouthOpenY (lip-sync). @default false */
  speaking?: boolean;
  /** Name shown on the label chip. @default 'Elysia' */
  name?: string;
  /** Show the LIVE indicator. @default false */
  live?: boolean;
  /** Stage height in px. @default 360 */
  height?: number;
  /** Framing zoom (larger = closer). @default 0.42 */
  zoom?: number;
  /** Vertical framing offset as a fraction of height. @default 0.04 */
  yOffset?: number;
  /** Overlay nodes rendered above the canvas. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * Renders Elysia's real Cubism 4 Live2D model (the Changli example rig) with auto
 * blink/breathing, lip-sync, and emotion-driven expressions. Lazy-loads the
 * Cubism runtime from CDN and falls back to the SVG <AvatarStage> on failure.
 *
 * @startingPoint section="Chat" subtitle="Live2D avatar window — real Cubism rig" viewport="420x380"
 */
export function Live2DStage(props: Live2DStageProps): JSX.Element;
