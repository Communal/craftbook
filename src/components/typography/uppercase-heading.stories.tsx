import type { Meta, StoryObj } from "@storybook/react";
import { UppercaseHeading } from ".";

const meta: Meta<typeof UppercaseHeading> = {
  title: 'UI Components/Typography/Uppercase Heading',
  component: UppercaseHeading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof meta>;

export const UppercaseHeadingDefault: Story = {
  args: {
    children: "Uppercase Heading",
  },
};

export const UppercaseHeadingLight: Story = {
  args: {
    children: "Uppercase Heading Light",
    light: true
  },
};