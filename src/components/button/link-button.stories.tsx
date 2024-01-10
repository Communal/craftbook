import type { Meta, StoryObj } from '@storybook/react';
import { LinkButton } from '.';

const meta: Meta<typeof LinkButton> = {
  title: 'UI Components/Link Button',
  component: LinkButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const LinkButtonDefault: Story = {
  args: {
    children: 'Explore',
  },
};
