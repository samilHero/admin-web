import React from 'react';
import type { ReactNode } from 'react';

import { TooltipLayout, TooltipTrigger, TooltipText } from './TooltipLayout';

interface TooltipProps {
  text: string;
  children: ReactNode;
}

export const Tooltip = ({ children, text }: TooltipProps) => {
  return (
    <TooltipLayout>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipText>{text}</TooltipText>
    </TooltipLayout>
  );
};
