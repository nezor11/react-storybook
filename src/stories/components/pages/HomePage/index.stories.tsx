import { Code } from "@/stories/components/system/Code";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Page } from ".";

const meta: Meta<typeof Page> = {
  title: "Design System/Pages/Home Page",
  component: Page,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    dataHeaderObject: [
      {
        name: "Jane Doe",
        jobTitle: "Frontender",
        iconsData: [
          { name: "CSS3Icon", width: "1em", height: "1em" },
          { name: "ViteIcon", width: "1em", height: "1em" },
          { name: "GitBranchIcon", width: "1em", height: "1em" },
        ],
        contactDetail: {
          title: "Casa Barcelona",
          phone: "+3468080202",
          email: "hola@micorreo.es",
          address: "08025 Barcelona",
        },
        imageDetail: {
          image: "https://source.unsplash.com/random/300x300/?face",
          alt: "Alt text",
          width: 300,
          height: 300,
        },
      },
    ],
    dataResumeObject: [
      {
        type: "infoSection",
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
        type: "infoSection",
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
      {
        type: "sliderSection",
        title: "Projects",
        icons: {
          iconsData: [{ name: "ViteIcon", width: "1em", height: "1em" }],
        },
        slidesData: [
          {
            year: "2015",
            title: "Fundació Pasqual Maragall",
            description: "Caballo blanco caballo negroorl",
            iconsData: [
              { name: "ViteIcon", width: "1em", height: "1em" },
              { name: "GitBranchIcon", width: "1em", height: "1em" },
            ],
            company: "Pradera",
            summary: "Diodenoo tiene musho peligro",
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
            workType: "",
          },
          {
            year: "2022",
            title: "Revlon",
            description: "Quietooor a peich amatomaa la caidita caballo blanco",
            iconsData: [{ name: "GitBranchIcon", width: "1em", height: "1em" }],
            company: "Pupita",
            summary: "La caidita llevame al sircoo",
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
            workType: "",
          },
          {
            year: "2019",
            title: "Vienduet",
            description: "Por la gloria de mi madre",
            iconsData: [
              { name: "CSS3Icon", width: "1em", height: "1em" },
              { name: "ViteIcon", width: "1em", height: "1em" },
            ],
            company: "Pupita",
            summary: "Está la cosa muy malar",
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
            workType: "",
          },
          {
            year: "2023",
            title: "Tourism of Tenerife",
            description: "Torpedo al ataquerl hasta luego Lucas",
            iconsData: [
              { name: "CSS3Icon", width: "1em", height: "1em" },
              { name: "ViteIcon", width: "1em", height: "1em" },
              { name: "GitBranchIcon", width: "1em", height: "1em" },
            ],
            company: "Pradera",
            summary: "Torpedo fistro llevame al sircoo mamaar",
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
            workType: "",
          },
          {
            year: "2016",
            title: "Adamo",
            description: "Torpedo al ataquerl hasta luego Lucas",
            iconsData: [
              { name: "JQueryIcon", width: "1em", height: "1em" },
              { name: "NuxtIcon", width: "1em", height: "1em" },
            ],
            company: "Pradera",
            summary: "Torpedo fistro llevame al sircoo mamaar",
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
            workType: "",
          },
          {
            year: "2016",
            title: "Adamo",
            description: "Gramenawer amatomaa ese hombree",
            iconsData: [
              { name: "JQueryIcon", width: "1em", height: "1em" },
              { name: "NuxtIcon", width: "1em", height: "1em" },
            ],
            company: "Pradera",
            summary: "Torpedo fistro llevame al sircoo mamaar",
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
            workType: "fresh",
            link: {
              href: "https://ondho.com/proyecto/decathlon-email-marketing",
              target: "_blank",
              rel: "noreferrer noopener",
              link_text: "Link text",
            },
          },
          {
            year: "2017",
            title: "Adamo",
            description: "Gramenawer amatomaa ese hombree",
            iconsData: [
              { name: "JQueryIcon", width: "1em", height: "1em" },
              { name: "NuxtIcon", width: "1em", height: "1em" },
            ],
            company: "Pradera",
            summary: "Torpedo fistro llevame al sircoo mamaar",
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
            workType: "fresh",
            link: {
              href: "https://ondho.com/proyecto/decathlon-email-marketing",
              target: "_blank",
              rel: "noreferrer noopener",
              link_text: "Link text",
            },
          },
          {
            year: "2020",
            title: "Festival de Clipmetrajes",
            description: "Gramenawer amatomaa ese hombree",
            iconsData: [
              { name: "JQueryIcon", width: "1em", height: "1em" },
              { name: "NuxtIcon", width: "1em", height: "1em" },
            ],
            company: "Pradera",
            summary: "Torpedo fistro llevame al sircoo mamaar",
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
            workType: "fresh",
            link: {
              href: "https://ondho.com/proyecto/decathlon-email-marketing",
              target: "_blank",
              rel: "noreferrer noopener",
              link_text: "Link text",
            },
          },
          {
            year: "2021",
            title: "Faborit",
            description: "Gramenawer amatomaa ese hombree",
            iconsData: [
              { name: "JQueryIcon", width: "1em", height: "1em" },
              { name: "NuxtIcon", width: "1em", height: "1em" },
            ],
            company: "Pradera",
            summary: "Torpedo fistro llevame al sircoo mamaar",
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
            workType: "fresh",
            link: {
              href: "https://ondho.com/proyecto/decathlon-email-marketing",
              target: "_blank",
              rel: "noreferrer noopener",
              link_text: "Link text",
            },
          },
        ],
      },
    ],
    dataFooterObject: {
      mods: "",
      copy_right_text: "Google",
      my_link: {
        link_text: "Link text",
        href: "https://carbon.sage.com",
        target: "_blank",
        rel: "noreferrer noopener",
      },
      contact_details: {
        title: "Casa Barcelona",
        phone: "+3468080202",
        email: "hola@micorreo.es",
        address: "08025 Barcelona",
      },
    },
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
