import { createContext } from 'react';

export const CheckboxGroupActionsContext = createContext<{
  updateCheckedValue: (value: string) => void;
} | null>(null);
CheckboxGroupActionsContext.displayName = 'CheckboxGroupActionsContext';

export const CheckboxGroupDataContext = createContext<{
  checkedValues: string[];
} | null>(null);
CheckboxGroupDataContext.displayName = 'CheckboxGroupDataContext';
