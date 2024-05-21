import type { ComponentProps, ElementType } from 'react';
import { createContext } from 'react';

export interface Modal<T extends React.ElementType> {
  Component: T;
  props: ComponentProps<T>;
}

export type ModalArray = Modal<ElementType>[];

export const ModalStateContext = createContext<ModalArray>([]);
