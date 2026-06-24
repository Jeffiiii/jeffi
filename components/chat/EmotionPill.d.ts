import * as React from 'react';

export type Emotion = 'happy' | 'playful' | 'shy' | 'sad' | 'surprised' | 'neutral';

export interface EmotionPillProps {
  /** Elysia's current expression (matches aivtuber/emotion.py). @default 'neutral' */
  emotion?: Emotion;
  /** Label language. @default 'en' */
  lang?: 'en' | 'zh';
  style?: React.CSSProperties;
}

/** Pill showing Elysia's current emotion with its accent colour + glyph. */
export function EmotionPill(props: EmotionPillProps): JSX.Element;
