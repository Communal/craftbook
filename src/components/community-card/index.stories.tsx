import type { Meta, StoryObj } from '@storybook/react';
import { CommunityCard } from '.';

const meta: Meta<typeof CommunityCard> = {
  title: 'UI Components/CommunityCard',
  component: CommunityCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CommunityCardExample: Story = {
  args: {
    title: 'Communal Engineering',
    description: 'Engineering updates from the team of communal',
    communityName: 'communal-engineering',
    logo: 'https://pbs.twimg.com/profile_images/1746968522008498176/Ev8bVOkA_400x400.jpg',
  },
};
