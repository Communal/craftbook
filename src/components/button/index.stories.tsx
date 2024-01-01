import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'UI Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  args: {
    children: 'Default Button',
  },
};

export const PrimaryButton: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const SecondaryButton: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const SolidButton: Story = {
  args: {
    children: 'Solid Button',
    variant: 'solid',
  },
};

export const OutlineButton: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
};

export const SmallButton: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
  },
};

export const MediumButton: Story = {
  args: {
    children: 'Medium Button',
    size: 'md',
  },
};

export const LargeButton: Story = {
  args: {
    children: 'Large Button',
    size: 'lg',
  },
};

export const DisabledButton: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};
