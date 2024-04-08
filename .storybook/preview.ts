import { Preview } from "@storybook/react";
import "../src/styles/tailwind.css";

const customViewports = {
  FHDTV: {
    name: "1080p Full HD Television",
    styles: {
      width: "1920px",
      height: "1080px",
    },
    type: "desktop",
  },
  LaptopHiDPI: {
    name: "Laptop with HiDPI screen",
    styles: {
      width: "1440px",
      height: "900px",
    },
    type: "desktop",
  },
  LaptopMDPI: {
    name: "Laptop with MDPI screen",
    styles: {
      width: "1280px",
      height: "800px",
    },
    type: "desktop",
  },
  iPhone6Plus: {
    name: "iPhone 6/7/8 Plus",
    styles: {
      width: "414px",
      height: "736px",
    },
    type: "mobile",
  },
  iPad: {
    name: "iPad iPadOS 14.7.1",
    styles: {
      width: "810px",
      height: "1080px",
    },
    type: "tablet",
  },
  iPhone6iOS11: {
    name: "iPhone 6/7/8 iOS11",
    styles: {
      width: "375px",
      height: "667px",
    },
    type: "mobile",
  },
};

export const preview: Preview = {
  parameters: {
    viewport: {
      viewports: {
        customViewports,
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        method: "alphabetical",
        includeNmaes: true,
        order: ["Design System", "System"],
      },
    },
  },
};
