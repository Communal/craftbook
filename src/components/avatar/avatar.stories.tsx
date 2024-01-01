import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '.';

const meta: Meta<typeof Avatar> = {
  title: 'UI Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const AvatarWithImageDefault: Story = {
  args: {
    fallback: 'YS',
    image:
      'https://pbs.twimg.com/profile_images/1737515726502793217/XsfwKK3m_400x400.jpg',
  },
};

export const AvatarWithImageLarge: Story = {
  args: {
    fallback: 'YS',
    image:
      'https://pbs.twimg.com/profile_images/1737515726502793217/XsfwKK3m_400x400.jpg',
    size: 'lg',
  },
};

export const AvatarWithImageMedium: Story = {
  args: {
    fallback: 'YS',
    image:
      'https://pbs.twimg.com/profile_images/1737515726502793217/XsfwKK3m_400x400.jpg',
    size: 'md',
  },
};

export const AvatarWithImageSmall: Story = {
  args: {
    fallback: 'YS',
    image:
      'https://pbs.twimg.com/profile_images/1737515726502793217/XsfwKK3m_400x400.jpg',
    size: 'sm',
  },
};

export const AvatarWithFallbackDefault: Story = {
  args: {
    fallback: 'YS',
  },
};

export const AvatarWithFallbackLarge: Story = {
  args: {
    fallback: 'YS',
    size: 'lg',
  },
};

export const AvatarWithFallbackMedium: Story = {
  args: {
    fallback: 'YS',
    size: 'md',
  },
};

export const AvatarWithFallbackSmall: Story = {
  args: {
    fallback: 'YS',
    size: 'sm',
  },
};

export const AvatarWithFallbackFilledSmall: Story = {
  args: {
    fallback: 'YS',
    filled: true,
    size: 'sm',
  },
};

export const AvatarWithFallbackFilledMedium: Story = {
  args: {
    fallback: 'YS',
    filled: true,
    size: 'md',
  },
};

export const AvatarWithFallbackFilledLarge: Story = {
  args: {
    fallback: 'YS',
    filled: true,
    size: 'lg',
  },
};
