import { Meta } from "@storybook/react";
import { FrameImage } from ".";

import bgImage from "@/assets/images/jorge-martinez-bn.jpeg";
import maskImage from "@/assets/images/mask-photo.png";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof FrameImage> = {
  title: "Design System/Molecules/Frame Image",
  component: FrameImage,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

export const Default = {
  args: {
    mask: maskImage,
    image: bgImage,
  },
};
