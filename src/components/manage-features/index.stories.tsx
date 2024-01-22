import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '..';
import ManageFeatureExample from '@/examples/manage-features';

const meta: Meta<typeof Box> = {
  title: 'UI Components/Manage Features',
  component: Box,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const HackathonTimelineDefaultExample: Story = {
  args: {
    children: <ManageFeatureExample />,
    style: {
      width: '380px'
    },
  }
}