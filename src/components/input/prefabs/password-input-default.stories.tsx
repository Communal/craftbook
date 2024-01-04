import type { Meta, StoryObj } from '@storybook/react';
import { PasswordInputExample } from '@/examples';

const meta: Meta<typeof PasswordInputExample> = {
  title: 'UI Components/Input/Prefabs',
  component: PasswordInputExample,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const PasswordInputExamplePrefab: Story = {};
