import type { Meta, StoryObj } from '@storybook/react';
import { HeroExamplePrimary } from '..';

const meta: Meta<typeof HTMLDivElement> = {
  title: 'Examples/Hero Section/Primary',
  component: HeroExamplePrimary,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const HeroSectionPrimary: Story = {};
