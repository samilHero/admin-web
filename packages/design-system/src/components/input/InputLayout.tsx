'use client';
import './../../styles/_global.scss';
import styled from '@emotion/styled';

interface InputLayoutProps {
  active: boolean;
}

export const InputLayout = styled.div<InputLayoutProps>`
  display: flex;
  flex-direction: column;
`;

export const InputBox = styled.div<InputLayoutProps>`
  display: flex;

  width: 320px;
  height: 20px;
  padding: 13px 16px;
  border-radius: 8px;

  background-color: var(--gray98);

  color: var(--black);

  input {
    border: 0;

    background-color: var(--gray98);

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: var(--gray70);
    }
  }

  input[disabled] {
    background-color: var(--gray95);

    color: var(--primary70);
  }

  svg {
    display: flex;

    margin-left: auto;
  }
`;

export const InputError = styled.div<InputLayoutProps>`
  margin-top: 5px;

  color: var(--error40);
  font-size: 12px;
`;
