import { Select } from './index';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  render: () => (
    <Select value={'1'}>
      <Select.Trigger>Trigger</Select.Trigger>
      <Select.Options>
        <Select.Option item="1">Option 1</Select.Option>
        <Select.Option item="2">Option 2</Select.Option>
        <Select.Option item="3">Option 3</Select.Option>
      </Select.Options>
    </Select>
  ),
};
