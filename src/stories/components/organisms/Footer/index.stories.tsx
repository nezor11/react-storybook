import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Footer } from ".";
import { TitleCopy } from "../../atoms/TitleCopy";
import { Code } from "../../system/Code";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Footer> = {
  title: "Design System/Organisms/Footer",
  component: Footer,
  tags: ["autodocs"],
  argTypes: {
    copy_right_text: {
      control: "text",
      defaultValue: "Google",
    },
    mods: {
      control: "text",
      defaultValue: "",
    },
    my_link: {
      control: "object",
      defaultValue: {
        link_text: "Link text",
        href: "https://carbon.sage.com",
        target: "_blank",
        rel: "noreferrer noopener",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mods: "",
    copy_right_text: "Google",
    my_link: {
      link_text: "Link text",
      href: "https://carbon.sage.com",
      target: "_blank",
      rel: "noreferrer noopener",
    },
    contact_details: {
      title: "Casa Barcelona",
      phone: "+3468080202",
      email: "hola@micorreo.es",
      address: "08025 Barcelona",
    },
  },
};

export const SourceCode: Story = {
  parameters: {
    layout: "centered",
    controls: {
      disable: true,
    },
    actions: {
      disable: true,
    },
  },
  render: () => (
    <>
      <TitleCopy text="Component source code:" mods="text-base" />
      <Code directoryPath="src/stories/components/organisms/Footer/" />
    </>
  ),
};
