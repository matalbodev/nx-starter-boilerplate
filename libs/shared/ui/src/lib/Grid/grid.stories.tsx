import type { Meta } from '@storybook/react';
import { Grid, GridProps } from './Grid';
import Column from '../Column/Column';

const Story: Meta<typeof Grid> = {
  component: Grid,
  title: 'Grid',
};
export default Story;

export const Primary = {
  args: {
    justifyCenter: false,
    itemsCenter: false
  },
  render: (args: GridProps) => (
    <Grid {...args}>
      <Column size={2}>
        Hello 1
      </Column>
      <Column size={4}>
        Hello 1

      </Column>
      <Column size={3}>
        Hello 1

      </Column>
      <Column size={3}>
        Hello 1

      </Column>
    </Grid>
  ),
};
