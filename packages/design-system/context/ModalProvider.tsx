import type { ComponentType } from 'react';
import { useMemo, useState, type ReactNode } from 'react';
import { ModalDispatchContext } from './ModalDispatchContext';
import type { Modal } from './ModalStateContext';
import { ModalStateContext } from './ModalStateContext';
import { Modals } from '@components/modal/Modals';

interface ModalProviderType {
  children: ReactNode;
}

export const ModalProvider = ({ children }: ModalProviderType) => {
  const [openedModals, setOpenedModals] = useState<Modal[]>([]);

  const open = (Component: ComponentType<any>, props: any) => {
    setOpenedModals((modals) => {
      return [...modals, { Component, props }];
    });
  };

  const close = (Component: ComponentType<any>) => {
    setOpenedModals((modals) => {
      return modals.filter((modal) => {
        return modal.Component !== Component;
      });
    });
  };

  const dispatch = useMemo(() => {
    return { open, close };
  }, []);

  return (
    <ModalStateContext.Provider value={openedModals}>
      <ModalDispatchContext.Provider value={dispatch}>
        {children}
        <Modals />
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
};
