import type { Meta, StoryObj } from '@storybook/react';
import { IconLinkButton } from '.';
import { ArrowRight } from 'lucide-react';

const meta: Meta<typeof IconLinkButton> = {
  title: 'UI Components/Link Button/Icon Link Button',
  component: IconLinkButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const IconLinkButtonDefault: Story = {
  args: {
    children: <ArrowRight className='w-4 h-4' />
  },
};