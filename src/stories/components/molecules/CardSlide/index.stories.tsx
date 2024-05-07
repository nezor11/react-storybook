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
    title: "Fistro quietooor diodenoo",
    description:
      "<p>Lorem fistrum mamaar no te digo trigo por no llamarte Rodrigor va usté muy cargadoo por la gloria de mi madre hasta luego Lucas se calle ustée mamaar la caidita de la pradera. Está la cosa muy malar la caidita ahorarr fistro apetecan diodeno caballo blanco caballo negroorl a gramenawer a peich a gramenawer pecador. Te voy a borrar el cerito benemeritaar pupita por la gloria de mi madre. Diodenoo tiene musho peligro ahorarr llevame al sircoo benemeritaar apetecan te va a hasé pupitaa condemor no puedor. Torpedo por la gloria de mi madre pupita apetecan al ataquerl amatomaa tiene musho peligro pecador a gramenawer me cago en tus muelas. Torpedo fistro llevame al sircoo mamaar. Está la cosa muy malar va usté muy cargadoo te va a hasé pupitaa sexuarl a wan ese hombree qué dise usteer benemeritaar sexuarl torpedo de la pradera. </p>",
    iconsData: [
      { name: "CSS3Icon", width: "1em", height: "1em" },
      { name: "ViteIcon", width: "1em", height: "1em" },
      { name: "GitBranchIcon", width: "1em", height: "1em" },
    ],
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
