import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import styled from '@emotion/styled';
import { HLSwitch } from '.';

const SwitchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const StyledSwitch = styled(HLSwitch)<{ checked: boolean }>`
  position: relative;
  display: inline-block;

  width: 60px;
  height: 34px;
  border-radius: 34px;

  background-color: #ccd3e0;

  cursor: pointer;

  &:hover {
    background: #667ba3;
  }

  ${({ checked }) =>
    checked &&
    `
    background-color: #2196f3;
  `}
`;

const Slider = styled.span<{ checked: boolean }>`
  position: absolute;

  border-radius: 34px;

  inset: 0;

  transition: 0.4s;

  &::before {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 4px;

    width: 26px;
    height: 26px;
    border-radius: 50%;

    background-color: #fff;

    transition: 0.4s;
  }

  ${({ checked }) =>
    checked &&
    `
    &::before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
  `}
`;

const meta: Meta<typeof HLSwitch> = {
  component: HLSwitch,
};

export default meta;
type Story = StoryObj<typeof HLSwitch>;

export const Primary: Story = {
  render: (args) =>
    (() => {
      const [checked, setChecked] = useState(false);

      return (
        <SwitchContainer>
          <StyledSwitch
            {...args}
            checked={checked}
            onChange={(newChecked) => {
              setChecked(newChecked);
            }}
            value={'value'}
          >
            <Slider checked={checked} className="slider" />
          </StyledSwitch>
        </SwitchContainer>
      );
    })(),
  args: {},
};
