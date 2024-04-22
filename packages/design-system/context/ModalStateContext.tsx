import type { Component, ComponentType, ReactNode } from 'react';
import { createContext } from 'react';

export interface Modal {
  Component: ComponentType<any>;
  props: any;
}

export const ModalStateContext = createContext<Modal[]>([]);
