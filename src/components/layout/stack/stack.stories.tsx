import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '.';
import { Card } from '@/components/card';
import { Button } from '@/components';

const meta: Meta<typeof Stack> = {
  title: 'Layouts/Stack',
  component: Stack,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const WrappingCards: Story = {
  args: {
    children: (
      <>
        <Card>Stacked Element 1</Card>
        <Card>Stacked Element 2</Card>
        <Card>Stacked Element 3</Card>
        <Card>Stacked Element 4</Card>
      </>
    ),
    style: {
      width: '320px',
    },
  },
};

export const WrappingButtons: Story = {
  args: {
    children: (
      <>
        <Button variant="primary">Stacked Button Primary</Button>
        <Button variant="secondary">Stacked Button Secondary</Button>
        <Button variant="solid">Stacked Button Solid</Button>
        <Button variant="outline">Stacked Button Outline</Button>
      </>
    ),
    style: {
      width: '320px',
    },
  },
};
