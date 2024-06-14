import { HLSelect } from './index';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta: Meta<typeof HLSelect> = {
  component: HLSelect,
};

export default meta;
type Story = StoryObj<typeof HLSelect>;

export const Primary: Story = {
  render: () =>
    (() => {
      const [selected, setSelected] = useState<
        string | string[] | undefined | null
      >();

      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1em',
          }}
        >
          <div>
            제어 컴포넌트입니다.
            <HLSelect
              value={selected}
              onChange={(value) => {
                setSelected(value);
              }}
            >
              <HLSelect.Trigger>Trigger</HLSelect.Trigger>
              <HLSelect.Options>
                <HLSelect.Option item="1">Option 1</HLSelect.Option>
                <HLSelect.Option item="2">Option 2</HLSelect.Option>
                <HLSelect.Option item="3">Option 3</HLSelect.Option>
              </HLSelect.Options>
            </HLSelect>
          </div>

          <div>
            비제어 컴포넌트입니다.
            <HLSelect defaultValue={'1'}>
              <HLSelect.Trigger>Trigger</HLSelect.Trigger>
              <HLSelect.Options>
                <HLSelect.Option item="1">Option 1</HLSelect.Option>
                <HLSelect.Option item="2">Option 2</HLSelect.Option>
                <HLSelect.Option item="3">Option 3</HLSelect.Option>
              </HLSelect.Options>
            </HLSelect>
          </div>
        </div>
      );
    })(),
};
