import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '.';

const meta: Meta<typeof Input> = {
  title: 'UI Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const TextInput: Story = {
  args: {
    type: "text",
    placeholder: "Enter your full name"
  },
};

export const NumberInput: Story = {
  args: {
    type: "number",
    placeholder: "Enter your team size"
  },
};

export const TelephoneNumberInput: Story = {
  args: {
    type: "tel",
    placeholder: "Enter your contact number",
    style: {
      width: "320px",
    },
  },
};

export const PasswordInput: Story = {
  args: {
    type: "password",
    placeholder: "Create new password",
  },
};

export const FullWidthEmailInput: Story = {
  args: {
    type: "email",
    placeholder: "Your email address",
    stretch: true,
  },
};

export const DisabledTextInput: Story = {
  args: {
    type: "text",
    value: "This input is disabled",
    disabled: true,
  },
};