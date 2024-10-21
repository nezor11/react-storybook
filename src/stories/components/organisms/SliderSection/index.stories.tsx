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

// Función para obtener una imagen aleatoria de Unsplash
const fetchRandomImage = async (query = "nature") => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=${query}&client_id=KsxUA5_AC79dw6VmBdoRAU6BUCf61iH6MKV4QLej6Wc`
    );

    if (!response.ok) {
      throw new Error(`Error de red: ${response.status}`);
    }

    const data = await response.json();
    return `${data.urls.raw}&w=800&h=1200&fit=crop`;
  } catch (error) {
    console.error("Error al obtener la imagen de Unsplash:", error);
    return "https://via.placeholder.com/800x1200";
  }
};

export const Default: Story = {
  args: {
    title: "Projects",
    icons: {
      iconsData: [{ name: "ViteIcon", width: "1em", height: "1em" }],
    },
  },
  render: (args) => {
    const [slidesData, setSlidesData] = useState([]);

    useEffect(() => {
      const fetchImagesForSlides = async () => {
        const images = await Promise.all([
          fetchRandomImage("web-design"),
          fetchRandomImage("web-development"),
          fetchRandomImage("programming"),
          fetchRandomImage("car"),
        ]);

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
            image: images[0],
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
            image: images[1],
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
            image: images[2],
            workType: "Mobile",
          },
          {
            year: "2021",
            title: "Custom CRM Solution",
            description: "Tailored customer relationship management system",
            iconsData: [
              { name: "SalesforceIcon", width: "1em", height: "1em" },
              { name: "JavaScriptIcon", width: "1em", height: "1em" },
            ],
            company: "CRMSolutions",
            summary: "Bespoke CRM system for improved customer engagement",
            workDone: [
              "Requirements analysis",
              "Custom module development",
              "Data migration and integration",
            ],
            image: images[3],
            workType: "CRM Development",
          },
        ]);
      };

      fetchImagesForSlides();
    }, []);

    return <SliderSection {...args} slidesData={slidesData} />;
  },
};
