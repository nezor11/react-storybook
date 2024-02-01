import { TitleCopy } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "Design System/Atoms/TitleCopy",
  component: TitleCopy,
  tags: ["autodocs"],
  argTypes: {
    text: "Rodrigor",
    mods: "text-6xl",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Title = {
  args: {
    title: "h1",
    mods: "text-6xl",
  },
};
