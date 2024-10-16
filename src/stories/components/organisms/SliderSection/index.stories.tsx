import { Code } from "@/stories/components/system/Code";
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

// Función para obtener una imagen de Unsplash con un tema específico
const fetchImageByTheme = async (theme) => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=${theme}&client_id=KsxUA5_AC79dw6VmBdoRAU6BUCf61iH6MKV4QLej6Wc`
    );
    if (!response.ok) {
      throw new Error(`Error de red: ${response.status}`);
    }
    const data = await response.json();
    return {
      src: `${data.urls.raw}&w=600&h=400&fit=crop`,
      width: 600,
      height: 400,
    };
  } catch (error) {
    console.error("Error al obtener la imagen de Unsplash:", error);
    return {
      src: "https://via.placeholder.com/600x400",
      width: 600,
      height: 400,
    };
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
      const themes = ["web-design", "web-development", "programming", "car"];

      const fetchImagesForSlides = async () => {
        const images = await Promise.all(
          themes.map((theme) => fetchImageByTheme(theme))
        );
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
          {
            year: "2017",
            title: "AI-powered Chatbot",
            description:
              "Intelligent conversational interface for customer support",
            iconsData: [
              { name: "PythonIcon", width: "1em", height: "1em" },
              { name: "TensorFlowIcon", width: "1em", height: "1em" },
            ],
            company: "AIChat",
            summary:
              "Advanced chatbot with natural language processing capabilities",
            workDone: [
              "NLP model training",
              "Chatbot logic implementation",
              "Integration with existing support systems",
            ],
            image: images[0],
            workType: "AI Development",
          },
          {
            year: "2022",
            title: "Data Visualization Dashboard",
            description: "Interactive charts and graphs for business analytics",
            iconsData: [
              { name: "D3Icon", width: "1em", height: "1em" },
              { name: "VueIcon", width: "1em", height: "1em" },
            ],
            company: "DataViz",
            summary: "Comprehensive dashboard for data-driven decision making",
            workDone: [
              "Data processing and analysis",
              "Custom chart development",
              "Real-time data updates",
            ],
            image: images[1],
            workType: "Data Visualization",
          },
          {
            year: "2023",
            title: "Blockchain Integration",
            description: "Implementing distributed ledger technology",
            iconsData: [
              { name: "EthereumIcon", width: "1em", height: "1em" },
              { name: "SolidityIcon", width: "1em", height: "1em" },
            ],
            company: "BlockChain",
            summary:
              "Secure and transparent blockchain solution for supply chain",
            workDone: [
              "Smart contract development",
              "Blockchain network setup",
              "Integration with existing systems",
            ],
            image: images[2],
            workType: "Blockchain",
          },
          {
            year: "2016",
            title: "Cloud Migration Project",
            description: "Transitioning legacy systems to cloud infrastructure",
            iconsData: [
              { name: "AWSIcon", width: "1em", height: "1em" },
              { name: "DockerIcon", width: "1em", height: "1em" },
            ],
            company: "CloudTech",
            summary: "Seamless migration of on-premise systems to the cloud",
            workDone: [
              "Cloud architecture design",
              "Data migration",
              "Performance optimization",
            ],
            image: images[3],
            workType: "Cloud Computing",
          },
          {
            year: "2024",
            title: "IoT Smart Home System",
            description: "Connected devices for home automation",
            iconsData: [
              { name: "RaspberryPiIcon", width: "1em", height: "1em" },
              { name: "MQTTIcon", width: "1em", height: "1em" },
            ],
            company: "SmartHome",
            summary: "Comprehensive IoT solution for modern smart homes",
            workDone: [
              "IoT device programming",
              "Central hub development",
              "Mobile app for remote control",
            ],
            image: images[0],
            workType: "IoT",
          },
          {
            year: "2025",
            title: "Augmented Reality App",
            description: "Immersive AR experience for education",
            iconsData: [
              { name: "UnityIcon", width: "1em", height: "1em" },
              { name: "ARKitIcon", width: "1em", height: "1em" },
            ],
            company: "ARLearn",
            summary: "Educational AR app to enhance learning experiences",
            workDone: [
              "3D model creation",
              "AR interaction development",
              "Content management system",
            ],
            image: images[1],
            workType: "Augmented Reality",
          },
          {
            year: "2026",
            title: "Cybersecurity Enhancement",
            description: "Strengthening digital defenses against threats",
            iconsData: [
              { name: "KaliLinuxIcon", width: "1em", height: "1em" },
              { name: "WiresharkIcon", width: "1em", height: "1em" },
            ],
            company: "SecureTech",
            summary: "Comprehensive security audit and system hardening",
            workDone: [
              "Vulnerability assessment",
              "Penetration testing",
              "Security policy implementation",
            ],
            image: images[2],
            workType: "Cybersecurity",
          },
          {
            year: "2027",
            title: "Machine Learning Model",
            description: "Predictive analytics for financial forecasting",
            iconsData: [
              { name: "ScikitLearnIcon", width: "1em", height: "1em" },
              { name: "PandasIcon", width: "1em", height: "1em" },
            ],
            company: "FinPredict",
            summary: "Advanced ML model for accurate financial predictions",
            workDone: [
              "Data preprocessing and feature engineering",
              "Model training and validation",
              "Integration with financial systems",
            ],
            image: images[3],
            workType: "Machine Learning",
          },
        ]);
      };

      fetchImagesForSlides();
    }, []);

    return <SliderSection {...args} slidesData={slidesData} />;
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
      <Code directoryPath="src/stories/components/organisms/SliderSection/" />
    </>
  ),
};
