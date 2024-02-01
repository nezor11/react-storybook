import type { Meta, StoryObj } from "@storybook/react";
import { InfoSection } from ".";

const meta: Meta<typeof InfoSection> = {
  title: "Design System/Organisms/Info Section",
  component: InfoSection,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Benemeritaar",
    subtitle: "Pecador al ataquerl mamaar a gramenawer.",
    sections: [
      {
        info: {
          company: "Quietooor",
          date: "2020 > Current",
          jobTitle: "Gloria de mi madre trainner",
          jobDesc:
            "Al ataquerl al ataquerl te va a hasé pupitaa al ataquerl pupita. Ahorarr ese pedazo de diodenoo te va a hasé pupitaa jarl. Hasta luego Lucas fistro no te digo trigo por no llamarte Rodrigor de la pradera te voy a borrar el cerito amatomaa fistro diodenoo torpedo. Por la gloria de mi madre me cago en tus muelas a peich te voy a borrar el cerito. Quietooor se calle ustée pupita jarl ahorarr me cago en tus muelas.",
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
};
