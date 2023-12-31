import type { Meta, StoryObj } from "@storybook/react";
import { Subtitle } from ".";

const meta: Meta<typeof Subtitle> = {
  title: 'UI Components/Typography/Subtitle',
  component: Subtitle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SubtitleMD: Story = {
  args: {
    children: "Subtitle (md)",
    size: "md"
  },
};

export const SubtitleSM: Story = {
  args: {
    children: "Subtitle (sm)",
    size: "sm"
  },
};

export const SubtitleXS: Story = {
  args: {
    children: "Subtitle (xs)",
    size: "xs"
  },
};