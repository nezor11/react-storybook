import { Meta } from "@storybook/react";
import { TitleSection } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof TitleSection> = {
  title: "Design System/Molecules/Title Section",
  component: TitleSection,
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: "text",
      defaultValue:
        "Lorem fistrum ahorarr de la pradera no te digo trigo por no llamarte Rodrigor",
    },
    mods: { control: "text", defaultValue: "text-base uppercase" },
  },
};

export default meta;

export const H3 = {
  args: {
    header: "h3",
    mods: "text-3xl uppercase",
  },
};
