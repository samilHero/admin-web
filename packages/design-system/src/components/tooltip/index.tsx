import React from 'react';

import { TooltipLayout, TooltipTrigger, TooltipText } from './TooltipLayout';

interface TooltipProps {
  text: string;
  children: string;
}

export const Tooltip = ({ text, children }: TooltipProps) => {
  return (
    <TooltipLayout>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipText>{text}</TooltipText>
    </TooltipLayout>
  );
};
