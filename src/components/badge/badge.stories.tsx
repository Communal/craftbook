import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '.';

const meta: Meta<typeof Badge> = {
  title: 'UI Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BadgeWithText: Story = {
  args: {
    children: 'Badge',
  },
};

export const BadgeWithNumber: Story = {
  args: {
    children: '12',
  },
};

export const BadgeWithTextNumber: Story = {
  args: {
    children: '12+ Messages',
  },
};

export const BadgeWithIcon: Story = {
  args: {
    children: "⌘"
  },
};