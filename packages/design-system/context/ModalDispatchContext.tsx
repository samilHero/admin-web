import type { ComponentType } from 'react';
import { createContext } from 'react';

interface ModalDispatchContextType {
  open: (Component: ComponentType<any>, props: any) => void;
  close: (Component: ComponentType<any>) => void;
}

export const ModalDispatchContext = createContext<ModalDispatchContextType>({
  open: () => {
    return;
  },
  close: () => {
    return;
  },
});
