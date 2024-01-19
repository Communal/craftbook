import type { Meta, StoryObj } from '@storybook/react';
import { FollowButton } from '.';

const meta: Meta<typeof FollowButton> = {
  title: 'UI Components/Follow Button',
  component: FollowButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const FollowButtonDefault: Story = {
  args: {},
};

export const FollowButtonAlreadyFollowing: Story = {
  args: {
    isFollowing: true,
  },
};
