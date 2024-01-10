import type { Meta, StoryObj } from '@storybook/react';
import { SidebarOption } from '.';
import { Home } from 'lucide-react';
import { Body } from '..';

const meta: Meta<typeof SidebarOption> = {
  title: 'UI Components/Sidebar Option Button',
  component: SidebarOption,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SidebarOptionExample: Story = {
  args: {
    children: (
      <>
        <Home className="w-4 h-4" />
        <Body size="sm">{'Home'}</Body>
      </>
    ),
  },
};
