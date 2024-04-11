// preview.tsx
import { useStorybookState } from "@storybook/api";
import {
  Controls,
  Description,
  Primary,
  Source,
  Subtitle,
  Title,
} from "@storybook/blocks";
import { Preview } from "@storybook/react";
import * as React from "react";
import "../src/styles/tailwind.css";
import FileContentDisplay from "../src/utils/FileContentDisplay";

const MY_VIEWPORTS = {
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

const DynamicPage = () => {
  const storybookState = useStorybookState();
  const storyId = storybookState.storyId;

  console.log("storybookState", storybookState);

  return (
    <>
      <div style={{ padding: "20px" }}>
        <h1>Story {storyId}</h1>
        {/* Otro contenido dinámico según el ID de la historia */}
      </div>
    </>
  );
};

const preview: Preview = {
  parameters: {
    docs: {
      page: ({ id, parameters }) => (
        <>
          <DynamicPage />
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Source />
          <Controls />
          {/* <Story /> */}
          {/* Pasamos el nombre del archivo al componente FileContentDisplay */}
          <FileContentDisplay fileName="/src/stories/components/atoms/BodyCopy/README.md" />
        </>
      ),
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: MY_VIEWPORTS,
    },
    options: {
      storySort: {
        includeNames: true,
        order: [
          "Design System",
          [
            "Atoms",
            ["Title Copy", "Subtitle Copy", "Body Copy", "Link", "*"],
            "Molecules",
            ["Title Section", "Info Item", "Footer", "*"],
            "Organisms",
            "Templates",
            "Pages",
          ],
        ],
      },
    },
  },
};

export default preview;
