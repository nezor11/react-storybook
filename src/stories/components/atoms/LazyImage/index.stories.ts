import { Meta } from "@storybook/react";
import { LazyImage } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof LazyImage> = {
  title: "Design System/Atoms/Lazy Image",
  component: LazyImage,
  tags: ["autodocs"],
  argTypes: {
    placeholderSrc: {
      control: "text",
    },
    src: {
      control: "text",
    },
    alt: {
      control: "text",
    },
    width: {
      control: "number",
    },
    height: {
      control: "number",
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
