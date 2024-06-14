import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { HLCheckboxGroup } from '.';
import { Text } from '@components';
import styled from '@emotion/styled';

const Icon = styled.span<{ checked: boolean }>`
  position: relative;
  display: inline-block;

  width: 16px;
  height: 16px;
  margin-right: 0.5em;
  border: 1px solid #000;

  ${({ checked }) =>
    checked &&
    `
    &::after {
        content:'V';
        font-size: 16px;
        font-weight: bold;
        width: 16px;
        height: 16px;
        text-align: center;
        position: absolute;
        left: 0;
        top:0;
    }
  `}
`;

const meta: Meta<typeof HLCheckboxGroup> = {
  component: HLCheckboxGroup,
};

export default meta;
type Story = StoryObj<typeof HLCheckboxGroup>;

export const Primary: Story = {
  render: (args) =>
    (() => {
      const [checked, setChecked] = useState<string[]>([]);

      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '3em',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1em',
            }}
          >
            <Text typo="h2">제어 컴포넌트</Text>
            <HLCheckboxGroup
              {...args}
              checkedValues={checked}
              onChange={(newChecked) => {
                console.log(newChecked);
                setChecked(newChecked);
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1em',
                }}
              >
                <HLCheckboxGroup.Item value={'value1'}>
                  <Icon checked={checked.includes('value1')} />
                  Checkbox1
                </HLCheckboxGroup.Item>
                <HLCheckboxGroup.Item value={'value2'}>
                  <Icon checked={checked.includes('value2')} />
                  Checkbox2
                </HLCheckboxGroup.Item>
              </div>
            </HLCheckboxGroup>
          </div>
        </div>
      );
    })(),
  args: {},
};
