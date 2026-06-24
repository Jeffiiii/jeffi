import * as React from 'react';

export interface ChatBubbleProps {
  /** Who sent it. @default 'elysia' */
  from?: 'elysia' | 'user';
  children?: React.ReactNode;
  /** Optional sender name shown above the bubble. */
  name?: React.ReactNode;
  /** Optional timestamp. */
  time?: React.ReactNode;
  /** Render the animated three-dot typing indicator instead of children. */
  typing?: boolean;
  style?: React.CSSProperties;
}

/**
 * One chat message. Elysia's bubbles are soft-pink glass (left); the viewer's
 * use the brand gradient (right). `typing` shows the three-dot indicator.
 */
export function ChatBubble(props: ChatBubbleProps): JSX.Element;
