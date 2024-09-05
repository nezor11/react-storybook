import { Code } from "@/stories/components/system/Code";
import { Meta } from "@storybook/react";
import React from "react";
import { ImageSlider } from ".";

const meta: Meta<typeof ImageSlider> = {
  title: "Design System/Atoms/Image Slider",
  component: ImageSlider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
  argTypes: {
    images: {
      control: {
        type: "object",
      },
      description: "Array of images to display in the slider",
      table: {
        type: {
          summary: "Image[]",
        },
      },
    },
  },
};

export default meta;

export const Default = {
  args: {
    images: [
      {
        src: "https://via.placeholder.com/1920x1080",
        width: 1920,
        height: 1080,
        alt: "Image 1",
      },
      {
        src: "https://via.placeholder.com/1920x1080",
        width: 1920,
        height: 1080,
        alt: "Image 2",
      },
      {
        src: "https://via.placeholder.com/1920x1080",
        width: 1920,
        height: 1080,
        alt: "Image 3",
      },
    ],
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
      <Code directoryPath="src/stories/components/atoms/ImageSlider/" />
    </>
  ),
};
