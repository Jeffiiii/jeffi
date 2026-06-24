import * as React from 'react';

export interface SwitchProps {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  /** Optional trailing label. */
  label?: React.ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
}

/** Pill toggle with a sliding pink knob (settings: TTS, autoplay, language…). */
export function Switch(props: SwitchProps): JSX.Element;
