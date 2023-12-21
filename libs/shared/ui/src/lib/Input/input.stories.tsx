import type { Meta, StoryObj } from '@storybook/react';
import { Input, InputProps } from './input';
import styles from './input.module.scss';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Input',
  argTypes: {
    type: {
      options: ['text', 'email'],
      control: {type: 'select'}
    }
  },
  decorators: [
    (Story) => (
      <div className={styles['form-wrap']}>
        <Story />
      </div>
    )
  ]
};
export default meta;

type Story = StoryObj<typeof Input>

const InputWithHooks = (args: InputProps) => {
  return <Input {...args} />;
}

export const Text: Story = {
  args: {
    isFull: false,
    type: 'text',
    placeholder: `input text`,
    isWrapped: false,
  },
  render: (args) => <InputWithHooks {...args} />,
};

export const Email: Story = {
  args: {
    ...Text.args,
    type: 'email',
    placeholder: 'input email',
  }
}