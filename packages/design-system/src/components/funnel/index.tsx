import { Children, isValidElement } from 'react';
import type { ReactElement, ReactNode } from 'react';

export type NonEmptyArray<T> = readonly [T, ...T[]];

export interface FunnelProps<Steps extends NonEmptyArray<string>> {
  steps: Steps;
  step: Steps[number];
  children:
    | Array<ReactElement<StepProps<Steps>>>
    | ReactElement<StepProps<Steps>>;
}

export interface StepProps<Steps extends NonEmptyArray<string>> {
  name: Steps[number];
  children: ReactNode;
}
export const Step = <T extends NonEmptyArray<string>>({
  children,
}: StepProps<T>) => {
  return <>{children}</>;
};

export const Funnel = <Steps extends NonEmptyArray<string>>({
  steps,
  step,
  children,
}: FunnelProps<Steps>) => {
  const validChildren = Children.toArray(children)
    .filter(isValidElement)
    .filter((i) =>
      steps.includes((i.props as Partial<StepProps<Steps>>).name ?? ''),
    ) as Array<ReactElement<StepProps<Steps>>>;

  const targetStep = validChildren.find((child) => child.props.name === step);

  if (targetStep == null) {
    throw new Error(`${step} 스텝 컴포넌트를 찾지 못했습니다.`);
  }

  return <>{targetStep}</>;
};
