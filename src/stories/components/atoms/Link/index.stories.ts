import type { Meta, StoryObj } from "@storybook/react";
import { Link } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Link> = {
  title: "Design System/Atoms/Link",
  component: Link,
  tags: ["autodocs"],
  argTypes: {
    link_text: {
      control: "text",
      defaultValue: "Link text",
    },
    mods: {
      control: "text",
      defaultValue: "visited:text-purple-600",
    },
    href: {
      control: "text",
      defaultValue: "https://carbon.sage.com",
    },
    target: {
      control: "text",
      defaultValue: "_blank",
    },
    rel: {
      control: "text",
      defaultValue: "noreferrer noopener",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mods: "visited:text-purple-600",
    link_text: "Link text",
    href: "https://carbon.sage.com",
    target: "_blank",
    rel: "noreferrer noopener",
  },
};
