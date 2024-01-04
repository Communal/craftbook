import type { Meta, StoryObj } from '@storybook/react';
import { Callout } from '.';

const meta: Meta<typeof Callout> = {
  title: 'UI Components/Callout',
  component: Callout,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CalloutDefault: Story = {
  args: {
    children: 'This is a default callout',
  },
};

export const CalloutMessage: Story = {
  args: {
    children: 'This is a message callout',
    type: 'message',
  },
};

export const CalloutInfo: Story = {
  args: {
    children: 'This is a info callout',
    type: 'info',
  },
};

export const CalloutSuccess: Story = {
  args: {
    children: 'This is a success callout',
    type: 'success',
  },
};

export const CalloutWarning: Story = {
  args: {
    children: 'This is a warning callout',
    type: 'warning',
  },
};

export const CalloutError: Story = {
  args: {
    children: 'This is a error callout',
    type: 'error',
  },
};
