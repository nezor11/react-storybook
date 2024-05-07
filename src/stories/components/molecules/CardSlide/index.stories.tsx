import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { CardSlide } from ".";
import { TitleCopy } from "../../atoms/TitleCopy";
import { Code } from "../../system/Code";

const meta: Meta<typeof CardSlide> = {
  title: "Design System/Molecules/Card Slide",
  component: CardSlide,
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
    year: "2021",
    title: "Title",
    description: "Description",
    iconsData: [
      { name: "CSS3Icon", width: "1em", height: "1em" },
      { name: "ViteIcon", width: "1em", height: "1em" },
      { name: "GitBranchIcon", width: "1em", height: "1em" },
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
      <TitleCopy text="Component source code:" mods="text-base" />
      <Code directoryPath="src/stories/components/molecules/CardSlide/" />
    </>
  ),
};
