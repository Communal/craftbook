import type { Meta, StoryObj } from '@storybook/react';
import { LikeButton } from '.';

const meta: Meta<typeof LikeButton> = {
  title: 'UI Components/Actions/Like Button',
  component: LikeButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const LikeActionDefault: Story = {
  args: {
    count: 12,
    isLiked: false,
  },
};

export const LikeActionWithDefaultLiked: Story = {
  args: {
    count: 12,
    isLiked: true,
  },
};
