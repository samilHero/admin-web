import { useContext } from 'react';
import { ModalStateContext } from '../../../context/ModalStateContext';
import { ModalDispatchContext } from '../../../context/ModalDispatchContext';

export const Modals = () => {
  const openedModals = useContext(ModalStateContext);
  const { close } = useContext(ModalDispatchContext);

  if (openedModals.length === 0) {
    return null;
  }

  return openedModals.map((modal, index) => {
    const { Component, props } = modal;

    const { onSubmit, ...rest } = props;

    const handleCloseModal = () => {
      close(Component);
    };

    const handleSubmit = async () => {
      if (typeof onSubmit === 'function') {
        await onSubmit();
      }
      handleCloseModal();
    };

    return (
      <Component
        key={index}
        closeModal={handleCloseModal}
        onSubmit={handleSubmit}
        {...rest}
      />
    );
  });
};
