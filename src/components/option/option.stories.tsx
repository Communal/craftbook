import type { Meta, StoryObj } from '@storybook/react';
import { Option } from '.';

const meta: Meta<typeof Option> = {
  title: 'UI Components/Option',
  component: Option,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const OptionDefault: Story = {
  args: {
    children: 'Science and Tech'
  },
};

export const OptionDefaultSelected: Story = {
  args: {
    children: 'Science and Tech',
    defaultSelected: true
  },
};