import { Meta } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { ImageSlider } from ".";

const meta: Meta<typeof ImageSlider> = {
  title: "Design System/Atoms/Image Slider",
  component: ImageSlider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "ImageSlider is a component that renders a slider with images. It is used to display a set of images in a page or section. It accepts the following props: `images`.",
      },
    },
  },
  argTypes: {
    images: {
      control: {
        type: "object",
        images: [
          {
            src: "https://via.placeholder.com/1200x800",
            width: 1200,
            height: 800,
            alt: "Image 1",
          },
          {
            src: "https://via.placeholder.com/1200x800",
            width: 1200,
            height: 800,
            alt: "Image 2",
          },
          {
            src: "https://via.placeholder.com/1200x800",
            width: 1200,
            height: 800,
            alt: "Image 3",
          },
        ],
      },
      description: "Array of images to display in the slider",
      table: {
        type: {
          summary: "Image[]",
        },
      },
    },
  },
};

export default meta;

// Función para buscar un array de imágenes de montañas utilizando el endpoint de búsqueda
const fetchMountainImages = async () => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=mountain&client_id=KsxUA5_AC79dw6VmBdoRAU6BUCf61iH6MKV4QLej6Wc&per_page=5`
  );
  const data = await response.json();

  if (data.results && data.results.length > 0) {
    // Mapea los resultados de la búsqueda a un array de imágenes con src, width, height, y alt
    // Forzamos las imágenes a tener el tamaño de 1200x800 usando `urls.raw`
    return data.results.map((image) => ({
      src: `${image.urls.raw}&w=1200&h=800&fit=crop`, // Forzamos el tamaño de la imagen
      width: 1200,
      height: 800,
      alt: image.alt_description || "Mountain image",
    }));
  } else {
    throw new Error("No se encontraron imágenes de montañas.");
  }
};

export const Default = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const imgArray = await fetchMountainImages();
        setImages(imgArray);
      } catch (error) {
        console.error(
          "Error al cargar las imágenes de Unsplash:",
          error.message
        );
        // Puedes agregar imágenes por defecto si ocurre un error
        setImages([
          {
            src: "https://via.placeholder.com/1200x800",
            width: 1200,
            height: 800,
            alt: "Image 1",
          },
          {
            src: "https://via.placeholder.com/1200x800",
            width: 1200,
            height: 800,
            alt: "Image 2",
          },
        ]);
      }
    };
    loadImages();
  }, []);

  return <ImageSlider images={images} />;
};
