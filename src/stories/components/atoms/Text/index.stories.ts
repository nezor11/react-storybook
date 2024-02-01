import type { Meta, StoryObj } from "@storybook/react";
import { Text } from ".";

const meta: Meta<typeof Text> = {
  title: "Design System/Atoms/Generic Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      defaultValue:
        "Lorem fistrum ese pedazo de se calle ustée quietooor amatomaa papaar papaar ahorarr condemor llevame al sircoo benemeritaar.",
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
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    as: "h1",
    children:
      "Lorem fistrum ese pedazo de se calle ustée quietooor amatomaa papaar papaar ahorarr condemor llevame al sircoo benemeritaar.",
    size: "base",
    weight: "normal",
    italic: false,
    underline: false,
    align: "left",
    className: "",
  },
};
