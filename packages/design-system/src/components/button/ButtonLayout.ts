import styled from '@emotion/styled/macro';
import { css } from '@emotion/react';
import { colors } from '@styles/color';
import type { ButtonProps } from '.';

const ButtonSizeMap = {
  sm: css`
    height: 32px;
  `,
  md: css`
    height: 40px;
  `,
  lg: css`
    height: 48px;
  `,
  xlg: css`
    height: 52px;
  `,
  xxlg: css`
    height: 56px;
    border-radius: 0px;
  `,
};

export const ButtonColorMap = {
  primary: css`
    background-color: ${colors.primary20};
    color: ${colors.white};

    &:hover {
      background-color: ${colors.primary40};
    }

    &:active {
      background-color: ${colors.primary10};
    }

    &:disabled {
      background-color: ${colors.primary60};
      color: ${colors.primary80};
    }
  `,

  secondary: css`
    background-color: ${colors.secondary50};
    color: ${colors.white};

    &:hover {
      background-color: ${colors.secondary60};
    }

    &:active {
      background-color: ${colors.secondary30};
    }

    &:disabled {
      background-color: ${colors.secondary80};
      color: ${colors.secondary70};
    }
  `,
};

export const ButtonWrapper = styled.button<ButtonProps>(
  {
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '8px',
  },
  ({ width }) => css`
    width: ${width};
  `,
  ({ size }) => ButtonSizeMap[size],
  ({ variant, color }) =>
    variant === 'filled' && color
      ? ButtonColorMap[color]
      : css`
          border: 1px solid ${colors.primary20};
          background-color: ${colors.white};
          color: ${colors.primary20};

          &:hover {
            background-color: ${colors.primary90};
          }

          &:active {
            background-color: ${colors.primary80};
          }

          &:disabled {
            border: 1px solid ${colors.primary70};
            color: ${colors.primary70};
            cursor: not-allowed;
          }
        `,
);
