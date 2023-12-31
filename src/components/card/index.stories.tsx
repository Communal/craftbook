import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '.';
import { Button, Heading } from '..';

const meta: Meta<typeof Card> = {
  title: 'UI Components/Card',
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CardDefaultWithText: Story = {
  args: {
    children: "Text inside card"
  },
};

export const CardDefaultWithHeading: Story = {
  args: {
    children: <Heading>Heading inside card</Heading>
  },
};

export const CardDefaultWithButton: Story = {
  args: {
    children: <Button>Button inside card</Button>
  },
};

export const CardWithHeaderTitle: Story = {
  args: {
    children: <>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, dignissimos totam. A, facere cum porro distinctio ad neque sapiente iste deserunt eius est, pariatur voluptatibus excepturi dignissimos consequatur necessitatibus. Delectus blanditiis quia magnam eveniet aspernatur, alias officia quam esse consectetur culpa neque.
    </>,
    withHeader: true,
    title: "Dummy Title"
  },
};

export const CardWithHeaderTitleSubtitle: Story = {
  args: {
    children: <div className='flex flex-row items-center gap-2'>
      <Button>Get Started</Button>
      <Button variant='secondary'>Create a community</Button>
    </div>,
    withHeader: true,
    title: "Create new account",
    subtitle: "You can create a communal account via GitHub"
  },
};