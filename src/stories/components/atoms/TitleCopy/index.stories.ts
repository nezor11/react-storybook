import type { Meta, StoryObj } from "@storybook/react";
import { TitleCopy } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof TitleCopy> = {
  title: "Design System/Atoms/Title Copy",
  component: TitleCopy,
  tags: ["autodocs"],
  argTypes: {
    as: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      control: { type: "select" },
      defaultValue: "h1",
    },
    text: {
      control: "text",
      defaultValue: "Rodrigor",
    },
    align: {
      options: ["left", "center", "right"],
      control: { type: "radio" },
      defaultValue: "left",
    },
    italic: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    underline: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    mods: { control: "text", defaultValue: "text-6xl" },
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    as: "h1",
    mods: "text-6xl",
  },
};
