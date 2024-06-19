import {
  Funnel,
  Step,
  type FunnelProps,
  type NonEmptyArray,
  type StepProps,
} from '@components/funnel';
import { useMemo, useState } from 'react';

type RouteFunnelProps<Steps extends NonEmptyArray<string>> = Omit<
  FunnelProps<Steps>,
  'steps' | 'step'
>;

type FunnelComponent<Steps extends NonEmptyArray<string>> = ((
  props: RouteFunnelProps<Steps>,
) => JSX.Element) & {
  Step: (props: StepProps<Steps>) => JSX.Element;
};

export const useFunnel = <Steps extends NonEmptyArray<string>>(
  steps: Steps,
  options?: { initialStep?: Steps[number] },
): readonly [FunnelComponent<Steps>, (step: Steps[number]) => void] => {
  const [step, setStep] = useState(options?.initialStep ?? steps[0]);

  const FunnelComponent = useMemo(() => {
    return Object.assign(
      function RouteFunnel(props: RouteFunnelProps<Steps>) {
        return <Funnel<Steps> steps={steps} step={step} {...props} />;
      },
      {
        Step,
      },
    );
  }, [step]);

  return [FunnelComponent, setStep] as const;
};
