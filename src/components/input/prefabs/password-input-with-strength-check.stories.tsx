import type { Meta, StoryObj } from '@storybook/react';
import { PasswordInputWithStrengthCheckExample } from '@/examples';

const meta: Meta<typeof PasswordInputWithStrengthCheckExample> = {
  title: 'UI Components/Input/Prefabs',
  component: PasswordInputWithStrengthCheckExample,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const PasswordInputWithStrengthCheckExamplePrefab: Story = {};
