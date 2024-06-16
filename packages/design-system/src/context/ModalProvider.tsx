'use client';

import type { ComponentProps, ComponentType } from 'react';
import { useMemo, useState, type ReactNode } from 'react';
import { ModalDispatchContext } from './ModalDispatchContext';
import type { Modal, ModalArray } from './ModalStateContext';
import { ModalStateContext } from './ModalStateContext';
import { Modals } from '@components/modal/Modals';

interface ModalProviderType {
  children: ReactNode;
}

export const ModalProvider = ({ children }: ModalProviderType) => {
  const [openedModals, setOpenedModals] = useState<ModalArray>([]);

  const openModal = <T extends React.ElementType>(
    Component: T,
    props: ComponentProps<T>,
  ) => {
    if (openedModals.includes({ Component, props })) {
      return;
    }

    setOpenedModals((modals) => {
      const isAlreadyOpen = modals.some(
        (modal) => modal.Component === Component,
      );
      return isAlreadyOpen
        ? modals
        : [...modals, { Component, props, opened: true }];
    });
  };

  const closeModal = <T extends React.ElementType>(Component: T) => {
    setOpenedModals((modals) => {
      return modals.filter((modal) => {
        return modal.Component !== Component;
      });
    });
  };

  const dispatch = useMemo(() => {
    return { openModal, closeModal };
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
