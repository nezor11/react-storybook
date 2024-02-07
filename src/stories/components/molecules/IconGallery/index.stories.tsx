import type { Meta, StoryObj } from "@storybook/react";
import { IconGallery } from ".";

const meta: Meta<typeof IconGallery> = {
  title: "Design System/Molecules/IconGallery",
  component: IconGallery,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
