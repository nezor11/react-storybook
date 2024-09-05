import { Code } from "@/stories/components/system/Code";
import type { Meta, StoryObj } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { CardSlide } from ".";

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
  argTypes: {
    year: {
      control: "text",
      description: "The year of the project.",
      table: {
        category: "Content",
      },
    },
    title: {
      control: "text",
      description: "The title of the project.",
      table: {
        category: "Content",
      },
    },
    summary: {
      control: "text",
      description: "The summary of the project.",
      table: {
        category: "Content",
      },
    },
    cardImage: {
      control: "text",
      description: "The image of the project.",
      table: {
        category: "Content",
      },
    },
    description: {
      control: "text",
      description: "The description of the project.",
      table: {
        category: "Content",
      },
    },
    iconsData: {
      control: "object",
      description: "The icons data of the project.",
      table: {
        category: "Content",
      },
    },
    workDone: {
      control: "object",
      description: "The work done in the project.",
      table: {
        category: "Content",
      },
    },
    workType: {
      control: "text",
      description: "The type of work.",
      table: {
        category: "Content",
      },
    },
    company: {
      control: "text",
      description: "The name of the company.",
      table: {
        category: "Content",
      },
    },
    link: {
      control: "object",
      description: "The link of the project.",
      table: {
        category: "Content",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Función para obtener imágenes de Unsplash con un tema específico
const fetchImageByTheme = async (theme: string) => {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?query=${theme}&client_id=KsxUA5_AC79dw6VmBdoRAU6BUCf61iH6MKV4QLej6Wc`
  );
  const data = await response.json();
  return {
    src: `${data.urls.raw}&w=1200&h=800&fit=crop`,
    width: 1200,
    height: 800,
  };
};

export const Default: Story = {
  args: {
    year: "2021",
    title: "Fistro quietooor diodenoo",
    summary: "A gramenawer a peich a gramenawer pecador",
    description:
      "<p>Lorem fistrum mamaar no te digo trigo por no llamarte Rodrigor...</p>",
    iconsData: [
      { name: "CSS3Icon", width: "1em", height: "1em" },
      { name: "ViteIcon", width: "1em", height: "1em" },
      { name: "GitBranchIcon", width: "1em", height: "1em" },
    ],
    workDone: [
      "Maecenas sit amet justo sit amet tellus tincidunt efficitur.",
      "Nullam nec turpis nec justo aliquam suscipit.",
      "Pellentesque habitant morbi tristique sen",
    ],
    workType: "Frontend",
    company: "Company Name",
    link: {
      href: "https://www.youtube.com/watch?v=nAEvmGK5KRs",
      link_text: "Watch on YouTube",
      rel: "",
    },
  },
  render: (args) => {
    const [images, setImages] = useState([
      {
        src: "https://via.placeholder.com/1200x800",
        width: 1200,
        height: 800,
      },
    ]);

    useEffect(() => {
      // Temas que quieres usar para las imágenes
      const themes = ["web-design", "web-development", "programming", "car"];

      const fetchImages = async () => {
        const fetchedImages = await Promise.all(
          themes.map((theme) => fetchImageByTheme(theme))
        );
        setImages(fetchedImages);
      };

      fetchImages();
    }, []);

    return <CardSlide {...args} images={images} />;
  },
};

export const SourceCode: Story = {
  parameters: {
    layout: "fullscreen",
    controls: {
      disable: true,
    },
    actions: {
      disable: true,
    },
  },
  render: () => (
    <>
      <Code directoryPath="src/stories/components/molecules/CardSlide/" />
    </>
  ),
};
