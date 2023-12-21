import type { Meta } from '@storybook/react';
import { Column, ColumnProps } from './Column';
import Grid from '../Grid/Grid';

const Story: Meta<typeof Column> = {
  component: Column,
  title: 'Column',
  argTypes: {
    size: {
      type: 'number',
      defaultValue: 4
    }
  },
  decorators: [
    (Story) => (
      <Grid>
        <Story />
      </Grid>
    )
  ]
};
export default Story;

export const Primary = {
  args: {
    size: 4,
  },
  render: (args: ColumnProps) => (
    <Column size={args.size}>
      blop
    </Column>
  ),
};
