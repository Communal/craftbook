import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '..';
import HackathonTimelineExample from '@/examples/hackathon-timeline';

const meta: Meta<typeof Box> = {
  title: 'UI Components/Hackathon Timeline',
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
    children: <HackathonTimelineExample />,
    style: {
      width: '640px'
    },
  }
}