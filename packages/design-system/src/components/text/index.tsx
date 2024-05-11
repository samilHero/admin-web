'use client';

// TODO: (주찬) 아직 작업 중인 컴포넌트입니다. [24-04-20]
// TODO: 컬러 시스템을 추가해야합니다. [24-04-20]
// TODO: font weight 시스템을 추가해야합니다. [24-04-20]

import classnames from 'classnames';
import type { ReactNode, CSSProperties } from 'react';
import React, { forwardRef } from 'react';
import styled from '@emotion/styled';

interface StyledProps {
  textAlign?: CSSProperties['textAlign'];
  fontWeight?: CSSProperties['fontWeight'];
  color?: string;
}
const StyledText = styled.span<StyledProps>`
  text-align: ${({ textAlign }) => textAlign};
`;

interface AsProp<T extends React.ElementType> {
  as?: T;
}
type PolymorphicRef<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>['ref'];
type PolymorphicComponentProps<T extends React.ElementType, Props> = AsProp<T> &
  React.ComponentPropsWithoutRef<T> &
  Props & {
    ref?: PolymorphicRef<T>;
  };
const Typography = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  b1: 'b1',
  b2: 'b2',
  b3: 'b3',
} as const;
type TypographyValue = (typeof Typography)[keyof typeof Typography];

type TextProps<T extends React.ElementType> = PolymorphicComponentProps<
  T,
  {
    children?: ReactNode;
    className?: string;
    typo?: TypographyValue;
  } & StyledProps
>;
type TextComponent = <T extends React.ElementType = 'span'>(
  props: TextProps<T>,
) => React.ReactNode | null;
export const Text: TextComponent = forwardRef(
  <T extends React.ElementType = 'span'>(
    {
      as,
      className,
      children,
      ellipsisAfterLines,
      typo,
      fontWeight,
      // color = 'grey900',
      stringToJSX,
      textAlign,
      wordBreak = true,
      role,
      ...props
    }: TextProps<T>,
    ref: PolymorphicRef<T>['ref'],
  ) => {
    return (
      <StyledText
        as={as}
        ref={ref}
        className={classnames(
          {
            [`typography-${typo}`]: typo,
          },
          className,
        )}
        {...props}
      >
        {children}
      </StyledText>
    );
  },
);
