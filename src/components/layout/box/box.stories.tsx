import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '.';
import { Body, Headline } from '@/components';
import { HeroExamplePrimary } from '@/examples';

const meta: Meta<typeof Box> = {
  title: 'Layouts/Box',
  component: Box,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BoxWithContent: Story = {
  args: {
    children: <Headline>This headline is inside a Box</Headline>,
  },
};

export const BoxWithAddedStyles: Story = {
  args: {
    children: <Body>This text is inside a styled Box</Body>,
    style: {
      background: '#f2f2f2',
      padding: '24px',
      color: 'white',
    },
  },
};

export const BoxContainingHeroSection: Story = {
  args: {
    children: <HeroExamplePrimary />,
    style: {
      padding: '24px',
      border: '1px solid #f2f2f2',
    },
  },
};
