import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '.';

const meta: Meta<typeof Heading> = {
  title: 'UI Components/Typography/Heading',
  component: Heading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Heading2XL: Story = {
  args: {
    children: "Heading (2xl)",
    size: "2xl"
  },
};

export const HeadingXL: Story = {
  args: {
    children: "Heading (xl)",
    size: "xl"
  },
};

export const HeadingLG: Story = {
  args: {
    children: "Heading (lg)",
    size: "lg"
  },
};

export const HeadingMD: Story = {
  args: {
    children: "Heading (md)",
    size: "md"
  },
};