import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Modal } from ".";
import { TitleCopy } from "../../atoms/TitleCopy";
import { Code } from "../../system/Code";

const meta: Meta<typeof CardSlide> = {
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
  args: {},
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
      <Code directoryPath="src/stories/components/molecules/Modal/" />
    </>
  ),
};
