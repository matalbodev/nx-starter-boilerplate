import type { Meta, StoryObj } from '@storybook/react';
import { Component } from './Component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Component> = {
  component: Component,
  title: 'Component',
};
export default meta;
type Story = StoryObj<typeof Component>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Component!/gi)).toBeTruthy();
  },
};
