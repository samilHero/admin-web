import { useContext } from 'react';
import { ModalDispatchContext } from '@context/ModalDispatchContext';

export const useModal = () => useContext(ModalDispatchContext);
