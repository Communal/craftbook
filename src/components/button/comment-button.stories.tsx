import type { Meta, StoryObj } from '@storybook/react';
import { CommentButton } from '.';

const meta: Meta<typeof CommentButton> = {
  title: 'UI Components/Actions/Comment Button',
  component: CommentButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const LikeActionDefault: Story = {
  args: {
    count: 122,
  },
};