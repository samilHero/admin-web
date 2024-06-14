'use client';

import { type ButtonHTMLAttributes } from 'react';
import type { ButtonColorMap } from './ButtonLayout';
import { ButtonWrapper } from './ButtonLayout';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'outline';
  width: React.CSSProperties['width'];
  size: 'sm' | 'md' | 'lg' | 'xlg' | 'xxlg';
  color?: keyof typeof ButtonColorMap;
}

export function Button({
  variant = 'filled',
  width,
  size,
  color = 'primary',
  children,
  ...props
}: ButtonProps) {
  return (
    <ButtonWrapper
      variant={variant}
      width={width}
      size={size}
      color={color}
      {...props}
    >
      {children}
    </ButtonWrapper>
  );
}
