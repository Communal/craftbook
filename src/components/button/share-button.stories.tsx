import type { Meta, StoryObj } from '@storybook/react';
import { ShareButton } from '.';

const meta: Meta<typeof ShareButton> = {
  title: 'UI Components/Actions/Share Button',
  component: ShareButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const LikeActionDefault: Story = {};
