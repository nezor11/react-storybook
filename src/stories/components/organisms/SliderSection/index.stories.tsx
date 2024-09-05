import { Code } from "@/stories/components/system/Code";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { SliderSection } from ".";

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
  args: {
    title: "Projects",
    icons: {
      iconsData: [{ name: "ViteIcon", width: "1em", height: "1em" }],
    },
    slidesData: [
      {
        year: "2015",
        title: "Fundació Pasqual Maragall",
        description: "Caballo blanco caballo negroorl",
        iconsData: [
          { name: "ViteIcon", width: "1em", height: "1em" },
          { name: "GitBranchIcon", width: "1em", height: "1em" },
        ],
        company: "Pradera",
        summary: "Diodenoo tiene musho peligro",
        workDone: [],
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
        workType: "Frontend",
      },
    ],
  },
};

export const SourceCode: Story = {
  parameters: {
    layout: "fullscreen",
    controls: {
      disable: true,
    },
    actions: {
      disable: true,
    },
  },
  render: () => (
    <>
      <Code directoryPath="src/stories/components/organisms/SliderSection/" />
    </>
  ),
};
