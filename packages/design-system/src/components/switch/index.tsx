'use client';

import React, { createContext, type Ref, useMemo } from 'react';
import styled from '@emotion/styled';
import { useControllableState } from '@hooks';
import { forwardRefWithAs } from '@utils';

const StyledInput = styled.input`
  display: none;
`;

export const SwitchActionsContext = createContext<{
  onChange: (checked: boolean) => void;
} | null>(null);
SwitchActionsContext.displayName = 'SwitchActionsContext';

export const SwitchDataContext = createContext<{
  checked: boolean;
} | null>(null);
SwitchDataContext.displayName = 'SwitchDataContext';

interface SwitchProps {
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  value?: string;
  name?: string;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLInputElement>;

  focus?: boolean;
}
export const Switch = forwardRefWithAs(
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
    }: SwitchProps,
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
      <SwitchActionsContext.Provider value={actions}>
        <SwitchDataContext.Provider value={data}>
          <StyledInput
            readOnly
            type="checkbox"
            role="switch"
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
        </SwitchDataContext.Provider>
      </SwitchActionsContext.Provider>
    );
  },
);
