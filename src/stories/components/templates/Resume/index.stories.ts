import type { Meta, StoryObj } from "@storybook/react";
import { Resume } from ".";

const meta: Meta<typeof Resume> = {
  title: "Design System/Templates/Resume",
  component: Resume,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
