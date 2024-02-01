import type { Meta, StoryObj } from "@storybook/react";
import { SubtitleCopy } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof SubtitleCopy> = {
  title: "Design System/Atoms/SubtitleCopy",
  component: SubtitleCopy,
  tags: ["autodocs"],
  argTypes: {
    subtitle: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      control: { type: "select" },
      defaultValue: "h2",
    },
    text: {
      control: "text",
      defaultValue: "Papaar papaar",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    subtitle: "h2",
  },
};
