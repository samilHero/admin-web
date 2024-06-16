'use client';

import styled from '@emotion/styled';
import { colors } from '@styles/color';

interface InputLayoutProps {
  active?: boolean;
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

  background-color: ${colors.gray98};

  color: ${colors.black};

  input {
    border: 0;

    background-color: ${colors.gray98};

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${colors.gray70};
    }
  }

  input[disabled] {
    background-color: ${colors.gray95};

    color: ${colors.primary70};
  }

  svg {
    display: flex;

    margin-left: auto;
  }
`;

export const InputError = styled.div<InputLayoutProps>`
  margin-top: 5px;

  color: ${colors.error40};
  font-size: 12px;
`;
