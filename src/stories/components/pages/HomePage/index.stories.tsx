import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Page } from ".";
import { Code } from "../../system/Code";

const meta: Meta<typeof Page> = {
  title: "Design System/Pages/Home Page",
  component: Page,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    dataHeaderObject: [],
    dataResumeObject: [
      {
        title: "Benemeritaar",
        subtitle: "Pecador al ataquerl mamaar a gramenawer.",
        icons: {
          iconsData: [{ name: "JavaScriptIcon", width: "1em", height: "1em" }],
        },
        sections: [
          {
            info: {
              company: "Quietooor",
              date: "2020 > Current",
              jobTitle: "Gloria de mi madre trainner",
              jobDesc:
                "Al ataquerl al ataquerl te va a hasé <strong>pupitaa al ataquerl pupita</strong>. Ahorarr ese pedazo de diodenoo te va a hasé pupitaa jarl. Hasta luego Lucas fistro no te digo trigo por no llamarte Rodrigor de la pradera te voy a borrar el cerito amatomaa fistro diodenoo torpedo. Por la gloria de mi madre me cago en tus muelas a peich te voy a borrar el cerito. Quietooor se calle ustée pupita jarl ahorarr me cago en tus muelas.",
            },
          },
          {
            info: {
              company: "Diodenoo",
              date: "2020 > Current",
              jobTitle: "Sircoo  developer",
              jobDesc:
                "Quietooor me cago en tus muelas te voy a borrar el cerito ese pedazo de torpedo te voy a borrar el cerito pecador a gramenawer tiene musho peligro apetecan. A wan al ataquerl hasta luego Lucas condemor caballo blanco caballo negroorl mamaar ese pedazo de. Quietooor qué dise usteer al ataquerl qué dise usteer. De la pradera está la cosa muy malar de la pradera apetecan hasta luego Lucas sexuarl quietooor jarl. A gramenawer la caidita caballo blanco caballo negroorl la caidita te va a hasé pupitaa de la pradera por la gloria de mi madre.",
            },
          },
          {
            info: {
              company: "",
              date: "",
              jobTitle: "",
              jobDesc:
                "Lorem fistrum a wan ese hombree te va a hasé pupitaa jarl ese que llega benemeritaar por la gloria de mi madre caballo blanco caballo negroorl apetecan. Ese pedazo de la caidita diodeno amatomaa a gramenawer tiene musho peligro torpedo. Tiene musho peligro qué dise usteer a gramenawer a gramenawer de la pradera.",
            },
          },
        ],
      },
      {
        title: "Musho peligro",
        icons: {
          iconsData: [{ name: "NuxtIcon", width: "1em", height: "1em" }],
        },
        sections: [
          {
            info: {
              company: "Condemor",
              date: "2020 > Current",
              jobTitle: "",
              jobDesc:
                "Amatomaa condemor sexuarl a gramenawer tiene musho peligro ahorarr se calle ustée quietooor te va a hasé pupitaa torpedo por la gloria de mi madre. Hasta luego Lucas se calle ustée va usté muy cargadoo tiene musho peligro apetecan quietooor condemor por la gloria de mi madre a wan condemor.",
            },
          },
          {
            info: {
              company: "Caballo blanco",
              date: "2020 > Current",
              jobTitle: "Sircoo  developer",
              jobDesc:
                "Quietooor me cago en tus muelas te voy a borrar el cerito ese pedazo de torpedo te voy a borrar el cerito pecador a gramenawer tiene musho peligro apetecan. A wan al ataquerl hasta luego Lucas condemor caballo blanco caballo negroorl mamaar ese pedazo de. Quietooor qué dise usteer al ataquerl qué dise usteer. De la pradera está la cosa muy malar de la pradera apetecan hasta luego Lucas sexuarl quietooor jarl. A gramenawer la caidita caballo blanco caballo negroorl la caidita te va a hasé pupitaa de la pradera por la gloria de mi madre.",
            },
          },
          {
            info: {
              company: "Mamaar",
              date: "",
              jobTitle: "Fistro caballo blanco",
              jobDesc:
                "Va usté muy cargadoo al ataquerl no puedor pecador. Por la gloria de mi madre mamaar fistro caballo blanco caballo negroorl no te digo trigo por no llamarte Rodrigor no puedor papaar papaar condemor. A gramenawer va usté muy cargadoo apetecan se calle ustée.",
            },
          },
        ],
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
      <Code directoryPath="src/stories/components/pages/HomePage/" />
    </>
  ),
};
