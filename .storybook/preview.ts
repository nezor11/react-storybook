import "../src/styles/tailwind.css";

// Replace your-renderer with the renderer you are using (e.g., react, vue3)
import { Preview } from "@storybook/react";

const MY_VIEWPORTS = {
  FHDTV: {
    name: "1080p Full HD Television",
    styles: {
      width: "1920px",
      height: "1080px",
    },
  },
  LaptopHiDPI: {
    name: "Laptop with HiDPI screen",
    styles: {
      width: "1440px",
      height: "900px",
    },
  },
  LaptopMDPI: {
    name: "Laptop with MDPI screen",
    styles: {
      width: "1280px",
      height: "800px",
    },
  },
  iPhone6Plus: {
    name: "iPhone 6/7/8 Plus",
    styles: {
      width: "414px",
      height: "736px",
    },
  },
  iPad: {
    name: "iPad iPadOS 14.7.1",
    styles: {
      width: "810px",
      height: "1080px",
    },
  },
  iPhone6iOS11: {
    name: "iPhone 6/7/8 iOS11",
    styles: {
      width: "375px",
      height: "667px",
    },
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      values: [
        { name: "dark", value: "#222" },
        { name: "white", value: "#FFF" },
        { name: "ligth", value: "rgba(248, 248, 247, 1)" },
      ],
    },
    options: {
      storySort: {
        order: [
          "System",
          "Design System",
          [
            "Atoms",
            ["TitleCopy", "JobDesc", "BodyCopy"],
            "Molecules",
            ["Button", "Button Tailwind", "Title Section", "Info Item"],
            "Organisms",
            "Templates",
            "Pages",
          ],
        ],
      },
    },
    viewport: {
      viewports: MY_VIEWPORTS,
    },
  },
};

export default preview;
