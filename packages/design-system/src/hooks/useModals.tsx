import type { ComponentType, ReactNode } from 'react';
import { useContext } from 'react';
import { ModalDispatchContext } from '../../context/ModalDispatchContext';

export const useModals = () => {
  const { open, close } = useContext(ModalDispatchContext);

  const openModal = (Component: ComponentType<any>, props: any) => {
    open(Component, props);
  };

  const closeModal = (Component: ComponentType<any>) => {
    close(Component);
  };

  return { openModal, closeModal };
};
