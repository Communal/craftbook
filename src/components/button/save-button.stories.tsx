import type { Meta, StoryObj } from '@storybook/react';
import { SaveButton } from '.';

const meta: Meta<typeof SaveButton> = {
  title: 'UI Components/Actions/Save Button',
  component: SaveButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const LikeActionDefault: Story = {
  args: {},
};