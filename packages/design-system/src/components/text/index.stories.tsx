import { Text } from '.';
import type { Meta, StoryObj } from '@storybook/react';
import styled from '@emotion/styled';

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 20px;
`;

const meta: Meta<typeof Text> = {
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  render: (args) => {
    const Story = () => {
      return (
        <TextWrapper>
          <Text typo="h1">H1</Text>
          <Text typo="h2">H2</Text>
          <Text typo="h3">H3</Text>
          <Text typo="h4">H4</Text>
          <Text typo="h5">H5</Text>
          <Text typo="b1">B1</Text>
          <Text typo="b2">B2</Text>
          <Text typo="b3">B3</Text>
        </TextWrapper>
      );
    };

    return <Story />;
  },
  args: {
    checked: false,
  },
};
