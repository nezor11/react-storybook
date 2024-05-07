import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Modal } from ".";
import { Code } from "../../system/Code";

const meta: Meta<typeof Modal> = {
  title: "Design System/Molecules/Modal",
  component: Modal,
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Title",
    company: "Company",
    year: "Year",
    images: [
      {
        src: "https://source.unsplash.com/random/600x400/?web-design",
        width: 600,
        height: 400,
      },
      {
        src: "https://source.unsplash.com/random/600x400/?web-development",
        width: 600,
        height: 400,
      },
      {
        src: "https://source.unsplash.com/random/600x400/?programming",
        width: 600,
        height: 400,
      },
      {
        src: "https://source.unsplash.com/random/600x400/?car",
        width: 600,
        height: 400,
      },
    ],
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
      <Code directoryPath="src/stories/components/molecules/Modal/" />
    </>
  ),
};
