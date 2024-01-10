import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from '.';
import { Plus } from 'lucide-react';

const meta: Meta<typeof IconButton> = {
  title: 'UI Components/Icon Button',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const IconButtonDefault: Story = {
  args: {
    children: <Plus className="w-5 h-5" />,
  },
};

export const IconButtonPrimary: Story = {
  args: {
    children: <Plus className="w-5 h-5" />,
    variant: 'primary',
  },
};

export const IconButtonSecondary: Story = {
  args: {
    children: <Plus className="w-5 h-5" />,
    variant: 'secondary',
  },
};

export const IconButtonSolid: Story = {
  args: {
    children: <Plus className="w-5 h-5" />,
    variant: 'solid',
  },
};

export const IconButtonOutline: Story = {
  args: {
    children: <Plus className="w-5 h-5" />,
    variant: 'outline',
  },
};

export const IconButtonSmall: Story = {
  args: {
    children: <Plus className="w-5 h-5" />,
    size: 'sm',
    variant: 'primary',
  },
};

export const IconButtonMedium: Story = {
  args: {
    children: <Plus className="w-5 h-5" />,
    size: 'md',
    variant: 'primary',
  },
};

export const IconButtonLarge: Story = {
  args: {
    children: <Plus className="w-5 h-5" />,
    size: 'lg',
    variant: 'primary',
  },
};
