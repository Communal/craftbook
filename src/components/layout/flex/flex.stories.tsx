import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from '.';
import { Button } from '@/components';

const meta: Meta<typeof Flex> = {
  title: 'Layouts/Flex',
  component: Flex,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ContainingButtonsInRow: Story = {
  args: {
    children: (
      <>
        <Button>Follow Community</Button>
        <Button variant="outline">See Events</Button>
      </>
    ),
    direction: 'row',
    gap: 12,
    alignItems: 'center',
  },
};

export const ContainingButtonsInColumn: Story = {
  args: {
    children: (
      <>
        <Button>Follow Community</Button>
        <Button variant="outline">See Events</Button>
      </>
    ),
    direction: 'column',
    gap: 12,
    alignItems: 'center',
  },
};
