'use client';

// TODO: (주찬) 아직 작업 중인 컴포넌트입니다. [24-04-15]

import type { HTMLProps, Ref } from 'react';
import React, { createContext, useMemo } from 'react';
import { forwardRefWithAs } from '@utils';
import { useControllableState } from '@hooks';

import styled from '@emotion/styled';

const StyledInput = styled.input`
  display: none;
`;

export const CheckboxActionsContext = createContext<{
  onChange: (checked: boolean) => void;
} | null>(null);
CheckboxActionsContext.displayName = 'CheckboxActionsContext';

export const CheckboxDataContext = createContext<{
  checked: boolean;
} | null>(null);
CheckboxDataContext.displayName = 'CheckboxDataContext';

interface CheckboxProps extends Omit<HTMLProps<HTMLDivElement>, 'onChange'> {
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  value?: string;
  name?: string;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLInputElement>;
}
export const Checkbox = forwardRefWithAs(
  (
    {
      defaultChecked = false,
      checked: controlledChecked,
      onChange: controlledOnChange,
      value,
      disabled,
      className,
      children,
      name,
      ...props
    }: CheckboxProps,
    ref?: Ref<HTMLInputElement>,
  ) => {
    let [checked, onChange] = useControllableState<boolean>(
      controlledChecked,
      controlledOnChange,
      defaultChecked,
    );

    const actions = useMemo(
      () => ({
        onChange,
      }),
      [onChange],
    );
    const data = useMemo(
      () => ({
        checked,
      }),
      [checked],
    );

    const handleClick = () => {
      onChange?.(!checked);
    };

    return (
      <CheckboxActionsContext.Provider value={actions}>
        <CheckboxDataContext.Provider value={data}>
          {/* TODO: Input 컴포넌트로 변경 */}
          <StyledInput
            readOnly
            type="checkbox"
            role="checkbox"
            ref={ref}
            checked={checked}
            value={value}
            disabled={disabled}
            name={name}
          />
          <div
            className={className}
            onClick={disabled ? undefined : handleClick}
            {...props}
          >
            {children}
          </div>
        </CheckboxDataContext.Provider>
      </CheckboxActionsContext.Provider>
    );
  },
);
