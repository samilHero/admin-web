'use client';

import React from 'react';
import { TooltipWrapper } from './TooltipLayout';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

export const Tooltip = ({ text, children }: TooltipProps) => {
  return (
    <TooltipWrapper>
      {children}
      <span className="tooltip-text">{text}</span>
    </TooltipWrapper>
  );
};
