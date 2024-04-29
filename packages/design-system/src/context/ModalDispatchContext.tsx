import type { ComponentType } from 'react';
import { createContext } from 'react';

interface ModalDispatchContextType {
  openModal: (Component: ComponentType<any>, props: any) => void;
  closeModal: (Component: ComponentType<any>) => void;
}

export const ModalDispatchContext = createContext<ModalDispatchContextType>({
  openModal: () => {
    return;
  },
  closeModal: () => {
    return;
  },
});
