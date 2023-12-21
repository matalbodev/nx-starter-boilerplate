import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
  argTypes: {
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    markup: {
      options: ['a', 'button'],
      control: { type: 'select' },
    },
    isCenter: {
      control: 'boolean'
    },
    isFull: {
      control: 'boolean'
    }
  },
};
export default meta;
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    color: 'primary',
    markup: 'button',
    children: 'Button',
    href: '#',
    isFull: false,
    isCenter: false,
  },
};
export const Secondary: Story = {
  args: {
    ...Primary.args,
    color: 'secondary'
  },
};
