import type { Meta, StoryObj } from "@storybook/react";
import { ContactDetail } from ".";

const meta: Meta<typeof ContactDetail> = {
  title: "Design System/Molecules/Contact Details",
  component: ContactDetail,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    contactDetail: {
      title: "Casa Barcelona",
      phone: "+34609457202",
      email: "contact@nezort.es",
      address: "08025 Barcelona",
    },
  },
};
