import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { HLRadioGroup } from '.';
import { Text } from '@components';
import styled from '@emotion/styled';
import { HLRadio } from '../radio';

const RadioGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3em;
`;

const RadioItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const RadioGroupStyled = styled(HLRadioGroup)`
  > div {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .radio-item {
    display: flex;
    align-items: center;

    width: 200px;

    cursor: pointer;

    &:hover .radio-icon {
      background-color: #f5f5f5;
    }

    &:active .radio-icon {
      background-color: #e5e5e5;
    }
  }

  &.disabled .radio-item {
    cursor: not-allowed;

    &:hover .radio-icon,
    &:active .radio-icon {
      background-color: unset;
    }
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

const dataList = ['짜장면', '짬뽕', '탕수육'];

const meta: Meta<typeof HLRadioGroup> = {
  component: HLRadioGroup,
};

export default meta;
type Story = StoryObj<typeof HLRadioGroup>;

const RadioGroupComponent = ({
  args,
}: {
  args: React.ComponentProps<typeof HLRadioGroup>;
}) => {
  const [checked, setChecked] = useState<string>(dataList[1]);

  return (
    <RadioGroupContainer>
      <RadioItemsContainer>
        <Text typo="h2">제어 컴포넌트</Text>
        <RadioGroupStyled
          {...args}
          value={checked}
          onChange={(newChecked) => setChecked(newChecked)}
          className={args.disabled ? 'disabled' : ''}
        >
          <div>
            {dataList.map((data) => (
              <HLRadio key={data} value={data} className="radio-item">
                <Icon checked={checked === data} className="radio-icon" />
                {data}
              </HLRadio>
            ))}
          </div>
        </RadioGroupStyled>
      </RadioItemsContainer>
    </RadioGroupContainer>
  );
};

export const Primary: Story = {
  render: (args) => <RadioGroupComponent args={args} />,
  args: {
    disabled: false,
  },
};
