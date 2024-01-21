import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '..';
import SidebarMenuExample from '@/examples/sidebar-menu';

const meta: Meta<typeof Box> = {
  title: 'Examples/Sidebar Menu',
  component: Box,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SidebarMenuDefaul: Story = {
  args: {
    children: <SidebarMenuExample />,
    style: {
      minWidth: '300px',
      width: 'fit-content',
      maxWidth: '46px',
    }
  }
};
