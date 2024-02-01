import { Meta } from "@storybook/react";
import { TitleSection } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof TitleSection> = {
  title: "Design System/Molecules/Title Section",
  component: TitleSection,
  tags: ["autodocs"],
  argTypes: {
    header: { control: "text", defaultValue: "h3" },
    text: {
      control: "text",
      defaultValue:
        "Lorem fistrum ahorarr de la pradera no te digo trigo por no llamarte Rodrigor",
    },
    mods: { control: "text", defaultValue: "text-base uppercase" },
  },
};

export default meta;

export const Desfault = {
  args: {
    header: "h3",
    mods: "text-3xl uppercase",
    subtext:
      "A gramenawer la caidita caballo blanco caballo negroorl la caidita te va a hasé pupitaa de la pradera por la gloria de mi madre.",
  },
};
