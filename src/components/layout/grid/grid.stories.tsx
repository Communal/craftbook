import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from '.';
import { Button } from '@/components';

const meta: Meta<typeof Grid> = {
  title: 'Layouts/Grid',
  component: Grid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ContainingButtonsInGrid: Story = {
  args: {
    children: (
      <>
        <Button variant="outline">Button 1</Button>
        <Button variant="outline">Button 2</Button>
        <Button variant="outline">Button 3</Button>
        <Button variant="outline">Button 4</Button>
      </>
    ),
    cols: 2,
  },
};
