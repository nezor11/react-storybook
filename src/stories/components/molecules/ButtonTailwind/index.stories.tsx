import type { Meta, StoryObj } from "@storybook/react";
import { ButtonTailwind } from ".";

const meta: Meta<typeof ButtonTailwind> = {
  title: "Design System/Molecules/Button Tailwind",
  component: ButtonTailwind,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: "solid",
    children: "Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Button",
  },
};
