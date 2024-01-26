import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '.';

const meta: Meta<typeof Switch> = {
  title: 'UI Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SwitchDefault: Story = {
  args: {},
};
