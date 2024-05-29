import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import styled from '@emotion/styled';
import { Radio } from '.';

const RadioWrapper = styled.div`
  display: flex;
`;

const RadioStyled = styled(Radio)`
  display: flex;
  align-items: center;

  width: 200px;

  cursor: pointer;

  &:hover:not(.disabled) .radio-icon {
    background-color: #f5f5f5;
  }

  &:active:not(.disabled) .radio-icon {
    background-color: #e5e5e5;
  }

  &.disabled {
    cursor: not-allowed;
  }
`;

const Icon = styled.span<{ checked: boolean }>`
  position: relative;
  display: inline-block;

  width: 16px;
  height: 16px;
  margin-right: 0.5em;
  border: 1px solid #000;
  border-radius: 50%;

  ${({ checked }) =>
    checked &&
    `
    &::after {
        content: 'v';
        font-size: 16px;
        font-weight: bold;
        width: 16px;
        height: 16px;
        text-align: center;
        position: absolute;
        left: 0;
        top: 0;
    }
  `}
`;

const meta: Meta<typeof Radio> = {
  component: Radio,
};

export default meta;
type Story = StoryObj<typeof Radio>;

const RadioComponent = ({
  args,
}: {
  args: React.ComponentProps<typeof Radio>;
}) => {
  const [checked, setChecked] = useState(false);

  return (
    <RadioWrapper>
      <RadioStyled
        {...args}
        value="value1"
        onChange={(newChecked) => setChecked(newChecked)}
        className={args.disabled ? 'disabled' : ''}
      >
        <Icon className="radio-icon" checked={checked} />
        Radio
      </RadioStyled>
    </RadioWrapper>
  );
};

export const Primary: Story = {
  render: (args) => <RadioComponent args={args} />,
  args: {
    disabled: false,
  },
};
