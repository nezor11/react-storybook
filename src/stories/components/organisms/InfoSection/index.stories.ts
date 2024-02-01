import type { Meta, StoryObj } from "@storybook/react";
import { InfoSection } from ".";

const meta: Meta<typeof InfoSection> = {
  title: "Design System/Organisms/Info Section",
  component: InfoSection,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
