import type { Meta, StoryObj } from '@storybook/react';
import { TabMenu } from '.';

const meta: Meta<typeof TabMenu> = {
  title: 'UI Components/Tab Menu',
  component: TabMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const TabMenuDefault: Story = {
  args: {
    options: ["Timeline", "Members", "Inititives", "Calendar"]
  }
}