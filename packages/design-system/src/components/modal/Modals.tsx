import { useContext } from 'react';
import { ModalStateContext } from '../../../context/ModalStateContext';

export const Modals = () => {
  const openedModals = useContext(ModalStateContext);

  if (openedModals.length === 0) {
    return null;
  }

  return openedModals.map((modal, index) => {
    const { Component, props } = modal;

    return <Component key={index} {...props} />;
  });
};
