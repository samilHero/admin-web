import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import styled from '@emotion/styled';
import { HLCheckbox } from '.';

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

const meta: Meta<typeof HLCheckbox> = {
  component: HLCheckbox,
};

export default meta;
type Story = StoryObj<typeof HLCheckbox>;

export const Primary: Story = {
  render: (args) =>
    (() => {
      const [checked, setChecked] = useState(false);

      return (
        <>
          <HLCheckbox
            {...args}
            checked={checked}
            onChange={(newChecked) => {
              setChecked(newChecked);
            }}
            value={'value'}
          >
            <Icon checked={checked} />
            Checkbox
          </HLCheckbox>
        </>
      );
    })(),
  args: {},
};
