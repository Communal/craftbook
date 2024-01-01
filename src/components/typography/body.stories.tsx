import type { Meta, StoryObj } from '@storybook/react';
import { Body } from '.';

const meta: Meta<typeof Body> = {
  title: 'UI Components/Typography/Body',
  component: Body,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BodyLG: Story = {
  args: {
    children: 'Body Text (lg)',
    size: 'lg',
  },
};

export const BodyMD: Story = {
  args: {
    children: 'Body Text (md)',
    size: 'md',
  },
};

export const BodySM: Story = {
  args: {
    children: 'Body Text (sm)',
    size: 'sm',
  },
};

export const BodyXS: Story = {
  args: {
    children: 'Body Text (xs)',
    size: 'xs',
  },
};
