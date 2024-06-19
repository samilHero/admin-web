'use client';

import React from 'react';
import type { InputHTMLAttributes } from 'react';
import { InputLayout, InputBox, InputError } from './InputLayout';
import { IconInputError, IconInputReset } from '@assets/icons';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  value: any;
  error?: string;
  onChange?: (value: any) => void;
  onClick?: () => void;
  onReset?: () => void;
}

export const Input: React.FC<IInputProps> = React.forwardRef(
  (
    {
      type = 'text',
      disabled,
      value,
      error,
      onChange,
      onClick,
      onReset,
      ...rest
    },
    ref: React.Ref<HTMLInputElement>,
  ): JSX.Element => {
    return (
      <InputLayout>
        <InputBox>
          <input
            type={type}
            disabled={disabled}
            autoComplete="off"
            value={value}
            onChange={onChange}
            onClick={onClick}
            {...rest}
          />
          {/* {error && <IconInputError />} */}
          {/* <IconInputReset onClick={() => onReset} /> */}
        </InputBox>
        {error && <InputError>에러 메세지</InputError>}
      </InputLayout>
    );
  },
);
