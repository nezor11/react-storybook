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
    placeholderClassName: {
      control: "text",
    },
    src: {
      control: "text",
    },
    alt: {
      control: "text",
    },
    className: {
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

export const Desfault = {
  args: {
    placeholderSrc: "https://placehold.co/600x400",
    placeholderClassName: "placeholder-image",
    src: "https://source.unsplash.com/random?blue%20sky",
    alt: "Alt text",
    className: "actual-image",
    width: 600,
    height: 400,
  },
};
