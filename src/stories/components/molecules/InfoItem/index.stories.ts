import type { Meta, StoryObj } from "@storybook/react";
import { InfoItem } from ".";

const meta: Meta<typeof InfoItem> = {
  title: "Design System/Molecules/Info Item",
  component: InfoItem,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    info: {
      company: "Novicell",
      date: "2020 > Current",
      jobTitle: "Front-end developer",
      jobDesc:
        "Work with APIs and get into .NET world (Umbraco, Sitecore) for the views. In-depth knowledge of Vue and Nuxt. Deal with Figma designs.",
    },
  },
};
