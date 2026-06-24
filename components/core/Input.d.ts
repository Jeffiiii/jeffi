import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** 'input' or 'textarea'. @default 'input' */
  as?: 'input' | 'textarea';
  /** Optional leading icon node. */
  icon?: React.ReactNode;
  /** Style for dark/plum surfaces. @default false */
  dark?: boolean;
  /** Style for the inner field. */
  style?: React.CSSProperties;
  /** Style for the bordered wrapper. */
  wrapStyle?: React.CSSProperties;
}

/** Text field / textarea with soft rounded border and a pink focus halo. */
export function Input(props: InputProps): JSX.Element;
