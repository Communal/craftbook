import type { Meta, StoryObj } from '@storybook/react';
import { Headline } from '.';

const meta: Meta<typeof Headline> = {
  title: 'UI Components/Typography/Headline',
  component: Headline,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const HeadlineLarge: Story = {
  args: {
    children: 'Large Headline',
    size: 'lg',
  },
};

export const HeadlineMedium: Story = {
  args: {
    children: 'Medium Headline',
    size: 'md',
  },
};

export const HeadlineSmall: Story = {
  args: {
    children: 'Small Headline',
    size: 'sm',
  },
};
