import type { HTMLProps, Ref } from 'react';
import React from 'react';
import { SelectDataContext } from './index';
import { useContextData } from '@hooks';

interface SelectOptionsProps extends HTMLProps<HTMLUListElement> {
  label?: string;
}
export const SelectOptions = (
  { children, label, className, ...props }: SelectOptionsProps,
  ref: Ref<HTMLUListElement>,
) => {
  const data = useContextData('Select.Options', SelectDataContext);

  return (
    data.open && (
      <ul ref={ref} className={className} {...props}>
        {label && <div>{label}</div>}
        {children}
      </ul>
    )
  );
};
