import type { Meta, StoryObj } from '@storybook/react';
import { HeroExampleSecondary } from '@/examples';
import { ViewContainer } from '.';

const meta: Meta<typeof ViewContainer> = {
  title: 'Layouts/View Container',
  component: ViewContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const WrappingHeroSection: Story = {
  args: {
    children: (
      <div className="bg-white">
        <HeroExampleSecondary />
      </div>
    ),
    style: {
      border: '1px dashed #d0d0d0',
      background: '#ff000020',
    },
  },
};
