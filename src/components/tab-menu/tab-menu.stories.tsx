import type { Meta, StoryObj } from '@storybook/react';
import { TabMenu } from '.';

const meta: Meta<typeof TabMenu> = {
  title: 'UI Components/Tab Menu',
  component: TabMenu,
  parameters: {},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const TabMenuDefault: Story = {
  args: {
    options: ['Timeline', 'Members', 'Inititives', 'Calendar'],
  },
};

export const TabMenuDefaultWithStretch: Story = {
  args: {
    options: ['Timeline', 'Members', 'Inititives', 'Calendar'],
    stretch: true,
  },
};