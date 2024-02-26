import { Meta, StoryObj } from "@storybook/react";
import { BodyCopy } from ".";

const meta: Meta<typeof BodyCopy> = {
  title: "Design System/Atoms/BodyCopy",
  component: BodyCopy,
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: "text",
      defaultValue:
        "Lorem fistrum ahorarr de la pradera no te digo trigo por no llamarte Rodrigor",
    },
    size: {
      options: ["sm", "base", "lg", "xl", "2xl", "3xl"],
      control: { type: "select" },
      defaultValue: "base",
    },
    weight: {
      options: ["thin", "normal", "medium", "semibold", "bold", "black"],
      control: { type: "select" },
      defaultValue: "normal",
    },
    align: {
      options: ["left", "center", "right"],
      control: { type: "radio" },
      defaultValue: "left",
    },
    emphasis: {
      options: ["none", "low", "high"],
      control: { type: "radio" },
      defaultValue: "none",
    },
    italic: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    underline: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    mods: { control: "text", defaultValue: "text-base" },
  },
};

export default meta;

//create a “template” of how args map to rendering (from SB)
type Story = StoryObj<typeof BodyCopy>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Paragraph: Story = {
  args: {
    tag: "p",
    mods: "text-base",
  },
};

export const StrongParagraph = {
  args: {
    tag: "strong",
    mods: "text-base",
    text: "Lorem fistrum <strong>ahorarr de la pradera</strong> no te digo trigo por no llamarte Rodrigor",
  },
};
