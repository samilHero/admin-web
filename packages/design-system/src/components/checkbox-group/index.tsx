'use client';

// TODO: (주찬) 아직 작업 중인 컴포넌트입니다. [24-05-04]

import type { HTMLProps, Ref } from 'react';
import { useCallback } from 'react';
import React, { useMemo } from 'react';
import { forwardRefWithAs } from '@utils';
import { useControllableState } from '@hooks';

import { Checkbox } from '../checkbox';
import {
  CheckboxGroupActionsContext,
  CheckboxGroupDataContext,
} from './checkboxGroupContext';

interface CheckboxProps
  extends Omit<
    HTMLProps<HTMLDivElement>,
    'onChange' | 'defaultValue' | 'checked' | 'defaultChecked'
  > {
  defaultCheckedValues?: string[];
  checkedValues?: string[];
  onChange?: (value: string[]) => void;
  name?: string;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLInputElement>;
}
const CheckboxGroupRoot = (
  {
    defaultCheckedValues = [],
    checkedValues: controlledCheckedValueList,
    onChange: controlledOnChange,
    disabled,
    className,
    children,
    name,
    ...props
  }: CheckboxProps,
  ref?: Ref<HTMLInputElement>,
) => {
  let [checkedValues, onChange] = useControllableState<string[]>(
    controlledCheckedValueList,
    controlledOnChange,
    defaultCheckedValues,
  );

  const updateCheckedValue = useCallback(
    (value: string) => {
      let updatedCheckedList;

      if (checkedValues?.includes(value)) {
        updatedCheckedList = checkedValues.filter((item) => item !== value);
      } else {
        updatedCheckedList = [...checkedValues, value];
      }

      onChange?.(updatedCheckedList);
    },
    [checkedValues],
  );

  const actions = useMemo(
    () => ({
      updateCheckedValue,
    }),
    [updateCheckedValue],
  );
  const data = useMemo(
    () => ({
      checkedValues,
    }),
    [checkedValues],
  );

  return (
    <CheckboxGroupActionsContext.Provider value={actions}>
      <CheckboxGroupDataContext.Provider value={data}>
        <div
          role="radiogroup"
          tabIndex={0}
          className={className}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </CheckboxGroupDataContext.Provider>
    </CheckboxGroupActionsContext.Provider>
  );
};

export const CheckboxGroup = Object.assign(
  forwardRefWithAs(CheckboxGroupRoot),
  {
    Item: Checkbox,
  },
);
