// TO DO: 버튼 작업중인 컴포넌트

import { Children, type ButtonHTMLAttributes, type ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'text' | 'filled' | 'outlined';
  width: Pick<React.CSSProperties, 'width'>;
  color: string;
  children?: React.ReactNode;
}

export function Button({
  variant = 'text',
  width,
  color,
  children,
  ...props
}: ButtonProps) {
  return <button {...props}>{children}</button>;
}
