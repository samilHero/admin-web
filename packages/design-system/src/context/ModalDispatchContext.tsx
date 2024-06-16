'use client';

import type { ComponentProps } from 'react';
import { createContext } from 'react';

interface ModalDispatchContextType {
  openModal: <T extends React.ElementType>(
    Component: T,
    props: ComponentProps<T>,
  ) => void;
  closeModal: <T extends React.ElementType>(Component: T) => void;
}

export const ModalDispatchContext = createContext<ModalDispatchContextType>({
  openModal: () => {
    return;
  },
  closeModal: () => {
    return;
  },
});
