import { createContext } from 'react';

export const RadioGroupActionsContext = createContext<{
  changeValue: (value: string) => void;
} | null>(null);
RadioGroupActionsContext.displayName = 'RadioGroupActionsContext';

export const RadioGroupDataContext = createContext<{
  value: string;
} | null>(null);
RadioGroupDataContext.displayName = 'RadioGroupDataContext';
