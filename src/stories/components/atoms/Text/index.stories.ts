import type { Meta, StoryObj } from "@storybook/react";
import { Text } from ".";

const meta: Meta<typeof Text> = {
  title: "Design System/Atoms/Generic Text",
  component: Text,
  tags: ["autodocs"],
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
    emphasis: "low",
    italic: false,
    underline: true,
    align: "left",
    className: "",
  },
};
