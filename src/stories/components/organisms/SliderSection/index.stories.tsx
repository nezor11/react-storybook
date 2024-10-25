import type { Meta, StoryObj } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { SliderSection } from ".";

const meta: Meta<typeof SliderSection> = {
  title: "Design System/Organisms/Slider Section",
  component: SliderSection,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

// Función para obtener una altura aleatoria para las imágenes de las cards
const getRandomHeight = () => {
  const heights = [200, 250, 300, 350]; // Alturas posibles
  const randomIndex = Math.floor(Math.random() * heights.length);
  return heights[randomIndex]; // Devuelve una altura aleatoria
};

// Función para obtener la imagen de la tarjeta (card) con dimensiones dinámicas
const fetchCardImage = async () => {
  const height = getRandomHeight(); // Altura dinámica para la card

  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=river&client_id=KsxUA5_AC79dw6VmBdoRAU6BUCf61iH6MKV4QLej6Wc`
    );

    if (!response.ok) {
      throw new Error(`Error de red: ${response.status}`);
    }

    const data = await response.json();
    return {
      src: `${data.urls.raw}&w=300&h=${height}&fit=crop`, // Aplica la altura dinámica
      height: height, // Retorna la altura para usarla al renderizar la card
    };
  } catch (error) {
    console.error("Error al obtener la imagen de Unsplash:", error);
    return {
      src: "https://placehold.co/300x350?text=Card+Slide", // Imagen por defecto
      height: 300, // Altura por defecto en caso de error
    };
  }
};

// Función para obtener un array de imágenes desde Unsplash
const fetchImagesFromUnsplash = async (query: string, count = 3) => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=${query}&count=${count}&client_id=KsxUA5_AC79dw6VmBdoRAU6BUCf61iH6MKV4QLej6Wc`
    );
    if (!response.ok) throw new Error("Error al obtener imágenes de Unsplash");

    const data = await response.json();
    return data.map((img: any) => ({
      alt: img.alt_description || "Unsplash Image",
      src: `${img.urls.raw}&w=1200&h=800&fit=crop`, // Dimensiones específicas para las imágenes del popup
      width: 1200,
      height: 800,
    }));
  } catch (error) {
    console.error("Error fetching images:", error);
    return [
      {
        src: "https://placehold.co/1200x800",
        width: 1200,
        height: 800,
        alt: "Placeholder Image",
      },
    ];
  }
};

export const SliderSectionStory: React.FC = () => {
  const [slidesData, setSlidesData] = useState([]);

  useEffect(() => {
    const fetchImagesForSlides = async () => {
      // Para cada slide, obtenemos una imagen única con una altura dinámica
      const slide1Image = await fetchCardImage();
      const slide2Image = await fetchCardImage();
      const slide3Image = await fetchCardImage();

      const imagesFetched = await fetchImagesFromUnsplash("nature", 3); // Imágenes para el popup

      // Actualiza el estado con los datos de cada slide y las imágenes obtenidas
      setSlidesData([
        {
          year: "2018",
          title: "Web Design Project",
          description: "A modern and responsive website design",
          iconsData: [
            { name: "ViteIcon", width: "1em", height: "1em" },
            { name: "ReactIcon", width: "1em", height: "1em" },
          ],
          company: "DesignCo",
          summary: "Cutting-edge web design for a tech startup",
          workDone: [
            "UI/UX design",
            "Responsive layout implementation",
            "Performance optimization",
          ],
          backgroundColor: "red",
          imageUrl: slide1Image.src, // Imagen obtenida de Unsplash
          cardHeight: slide1Image.height, // Altura dinámica
          images: imagesFetched, // Array de imágenes para el popup
          workType: "Frontend",
        },
        {
          year: "2019",
          title: "E-commerce Platform",
          description: "Full-stack development of an online store",
          iconsData: [
            { name: "NodeIcon", width: "1em", height: "1em" },
            { name: "PostgreSQLIcon", width: "1em", height: "1em" },
          ],
          company: "ShopTech",
          summary: "Scalable e-commerce solution with advanced features",
          workDone: [
            "Backend API development",
            "Database design",
            "Payment gateway integration",
          ],
          backgroundColor: "blue",
          imageUrl: slide2Image.src, // Imagen obtenida de Unsplash
          cardHeight: slide2Image.height, // Altura dinámica
          images: imagesFetched, // Array de imágenes para el popup
          workType: "Full Stack",
        },
        {
          year: "2020",
          title: "Mobile App Development",
          description: "Cross-platform app for iOS and Android",
          iconsData: [
            { name: "ReactNativeIcon", width: "1em", height: "1em" },
            { name: "TypeScriptIcon", width: "1em", height: "1em" },
          ],
          company: "MobileInnovate",
          summary: "Feature-rich mobile application for productivity",
          workDone: [
            "Cross-platform development",
            "State management implementation",
            "Native module integration",
          ],
          backgroundColor: "yellow",
          videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          imageUrl: slide3Image.src, // Imagen obtenida de Unsplash
          cardHeight: slide3Image.height, // Altura dinámica
          images: imagesFetched, // Array de imágenes para el popup
          workType: "Mobile",
        },
      ]);
    };

    fetchImagesForSlides();
  }, []);

  return (
    <SliderSection
      title="Projects"
      icons={{
        iconsData: [{ name: "ReactIcon", width: "1em", height: "1em" }],
      }}
      slidesData={slidesData} // Pasamos los datos de los slides al componente SliderSection
    />
  );
};
