import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
};
export default meta;
type Story = StoryObj<typeof Button>;
export const Default: Story = {
  argTypes: {
    skin: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
      description: 'Will modifiy skin of the button',
    },
    children: {
      defaultValue: "I'm a button",
      control: { type: 'text' },
      description: 'Will modifiy content of the button',
    },
    size: {
      option: ['', 'md', 'lg'],
      control: { type: 'radio' },
      description: 'Will modifiy size of button',
    },
  },
};
