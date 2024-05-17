'use client';

// TODO: (주찬) 아직 작업 중인 컴포넌트입니다. [24-05-15]

import type { HTMLProps, Ref } from 'react';
import { useContext } from 'react';
import React, { createContext, useMemo } from 'react';
import { forwardRefWithAs } from '@utils';
import { useControllableState } from '@hooks';

import styled from '@emotion/styled';
import { RadioGroupActionsContext } from '../radio-group/radioGroupContext';

const StyledInput = styled.input`
  display: none;
`;

export const RadioActionsContext = createContext<{
  onChange: (checked: boolean) => void;
} | null>(null);
RadioActionsContext.displayName = 'RadioActionsContext';

export const RadioDataContext = createContext<{
  checked: boolean;
} | null>(null);
RadioDataContext.displayName = 'RadioDataContext';

interface RadioProps extends Omit<HTMLProps<HTMLInputElement>, 'onChange'> {
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
export const Radio = forwardRefWithAs(
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
    }: RadioProps,
    ref?: Ref<HTMLInputElement>,
  ) => {
    // useSafeContext를 사용하지 않습니다. Checkbox 단독으로 사용할 경우 groupActions는 undefined이어야합니다.
    const groupActions = useContext(RadioGroupActionsContext);
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
      onChange?.(true);
      if (value && groupActions) {
        groupActions.changeValue?.(value);
      }
    };

    return (
      <RadioActionsContext.Provider value={actions}>
        <RadioDataContext.Provider value={data}>
          {/* TODO: Input 컴포넌트로 변경 */}
          <StyledInput
            readOnly
            type="radio"
            role="radio"
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
        </RadioDataContext.Provider>
      </RadioActionsContext.Provider>
    );
  },
);
