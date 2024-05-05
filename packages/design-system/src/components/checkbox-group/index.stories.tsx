import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { CheckboxGroup } from '.';
import { Text } from '../text';
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

const meta: Meta<typeof CheckboxGroup> = {
  component: CheckboxGroup,
};

export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

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
            <CheckboxGroup
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
                <CheckboxGroup.Item value={'value1'}>
                  <Icon checked={checked.includes('value1')} />
                  Checkbox1
                </CheckboxGroup.Item>
                <CheckboxGroup.Item value={'value2'}>
                  <Icon checked={checked.includes('value2')} />
                  Checkbox2
                </CheckboxGroup.Item>
              </div>
            </CheckboxGroup>
          </div>
        </div>
      );
    })(),
  args: {},
};
