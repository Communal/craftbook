import type { Meta, StoryObj } from '@storybook/react';
import { HeroExampleSecondary } from '..';

const meta: Meta<typeof HTMLDivElement> = {
  title: 'Examples/Hero Section/Secondary',
  component: HeroExampleSecondary,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const HeroSectionSecondary: Story = {};
