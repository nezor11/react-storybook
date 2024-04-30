import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { SliderSection } from ".";
import { TitleCopy } from "../../atoms/TitleCopy";
import { Code } from "../../system/Code";

const meta: Meta<typeof SliderSection> = {
  title: "Design System/Organisms/Slider Section",
  component: SliderSection,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
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
      <Code directoryPath="src/stories/components/organisms/SliderSection/" />
    </>
  ),
};
