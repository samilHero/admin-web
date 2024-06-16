'use client';

import React from 'react';
import type { InputHTMLAttributes } from 'react';
import { InputLayout, InputBox, InputError } from './InputLayout';
import { IconInputError, IconInputReset } from '@assets/icons'; // icons 디렉토리의 index 파일에서 export한 컴포넌트를 불러옵니다.

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputType: string;
  disabled?: boolean;
  value: string;
  error?: string;
  onChange?: () => void;
  onClick?: () => void;
  onReset?: () => void;
}

export const Input: React.FC<IInputProps> = React.forwardRef(
  (
    {
      inputType = 'text',
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
            type={inputType}
            disabled={disabled}
            autoComplete="off"
            value={value}
            onChange={onChange}
            onClick={onClick}
            {...rest}
          />
          {error && <IconInputError />}
          <IconInputReset onClick={() => onReset} />
        </InputBox>
        {error && <InputError>에러 메세지</InputError>}
      </InputLayout>
    );
  },
);
