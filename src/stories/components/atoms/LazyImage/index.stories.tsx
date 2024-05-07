import { Code } from "@/stories/components/system/Code";
import { Meta } from "@storybook/react";
import React from "react";
import { LazyImage } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof LazyImage> = {
  title: "Design System/Atoms/Lazy Image",
  component: LazyImage,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "LazyImage is a component that renders an image with a placeholder. It is used to display an image in a page or section. It accepts the following props: `placeholderSrc`, `src`, `alt`, `width`, and `height`.",
      },
    },
  },
  argTypes: {
    placeholderSrc: {
      control: "text",
      description:
        "The placeholder image source. By default, it is set to a placeholder image from placehold.co.",
      table: {
        defaultValue: { summary: "https://placehold.co/600x400" },
      },
    },
    src: {
      control: "text",
      description:
        "The image source. By default, it is set to a random image from unsplash.com.",
      table: {
        defaultValue: {
          summary: "https://source.unsplash.com/random/600x400/?mountain",
        },
      },
    },
    alt: {
      control: "text",
      description:
        "The alt text of the image. By default, it is set to Alt text string.",
      table: {
        defaultValue: {
          summary: "Alt text",
        },
      },
    },
    width: {
      control: "number",
      description: "The width of the image. By default, it is set to 600.",
      table: {
        defaultValue: {
          summary: 600,
        },
      },
    },
    height: {
      control: "number",
      description: "The height of the image. By default, it is set to 400.",
      table: {
        defaultValue: {
          summary: 400,
        },
      },
    },
  },
};

export default meta;

export const Default = {
  args: {
    placeholderSrc: "https://placehold.co/600x400",
    src: "https://source.unsplash.com/random/600x400/?mountain",
    alt: "Alt text",
    width: 600,
    height: 400,
  },
};

export const SourceCode = {
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
      <Code directoryPath="src/stories/components/atoms/Lazyimage/" />
    </>
  ),
};
