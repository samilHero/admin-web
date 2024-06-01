import type { Meta, StoryObj } from '@storybook/react';
import type { ButtonProps } from '.';
import { Button } from '.';
import { ButtonColorMap } from './ButtonLayout';

const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select', options: ['filled', 'outline'] },
    },
    size: {
      control: { type: 'select', options: ['sm', 'md', 'lg', 'xlg', 'xxlg'] },
    },
    color: {
      control: { type: 'select', options: Object.keys(ButtonColorMap) },
    },
    width: {
      control: { type: 'text' },
    },
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Filled: Story = {
  args: {
    variant: 'filled',
    width: '100px',
    size: 'md',
    color: 'primary',
    children: 'Filled Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    width: '100px',
    size: 'md',
    color: 'primary',
    children: 'Outline Button',
  },
};

export const XXLarge: Story = {
  args: {
    variant: 'filled',
    width: '200px',
    size: 'xxlg',
    color: 'primary',
    children: 'XXLarge Button',
  },
};

export const CustomColor: Story = {
  args: {
    variant: 'filled',
    width: '150px',
    size: 'md',
    color: 'primary',
    children: 'Custom Color Button',
  },
};
