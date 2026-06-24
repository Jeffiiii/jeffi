import * as React from 'react';

export interface ChatComposerProps {
  value?: string;
  onChange?: (v: string) => void;
  /** Called with the trimmed message on Enter / send. */
  onSend?: (message: string) => void;
  /** Mic (STT) toggle handler. */
  onMic?: () => void;
  /** Recording state — swaps mic glyph + placeholder. @default false */
  listening?: boolean;
  /** Style for dark/plum overlays. @default true */
  dark?: boolean;
  placeholder?: string;
  style?: React.CSSProperties;
}

/** Message input row for Elysia chat: text field + mic (STT) + send. */
export function ChatComposer(props: ChatComposerProps): JSX.Element;
