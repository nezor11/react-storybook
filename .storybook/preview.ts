import { css, keyframes } from "@emotion/react";
import { withThemeByClassName } from "@storybook/addon-themes";
import { Preview } from "@storybook/react";
import { Theme } from "@storybook/theming";
import "../src/styles/tailwind.css";

const lightTheme: Theme = {
  base: "light",
  appBg: "white",
  colorPrimary: "#FF8C69",
  colorSecondary: "#FF8C69",
  brandImage:
    "https://res.cloudinary.com/alvarosaburido/image/upload/v1616082729/as-portfolio/awesome-sushi-logo_aiaydr.png",
  color: {
    primary: "#000",
    secondary: "#000",
    tertiary: "#000",
    ancillary: "#000",
    orange: "#000",
    gold: "",
    green: "",
    seafoam: "",
    purple: "",
    ultraviolet: "",
    lightest: "",
    lighter: "",
    light: "",
    mediumlight: "",
    medium: "",
    mediumdark: "",
    dark: "",
    darker: "",
    darkest: "",
    border: "",
    positive: "",
    negative: "",
    warning: "",
    critical: "",
    defaultText: "",
    inverseText: "",
    positiveText: "",
    negativeText: "",
    warningText: "",
  },
  background: {
    app: "#000",
    bar: "#000",
    content: "#000",
    preview: "#000",
    gridCellSize: 0,
    hoverable: "#000",
    positive: "#000",
    negative: "#000",
    warning: "#000",
    critical: "#000",
  },
  typography: {
    fonts: {
      base: "",
      mono: "",
    },
    weight: {
      regular: 0,
      bold: 0,
    },
    size: {
      s1: 0,
      s2: 0,
      s3: 0,
      m1: 0,
      m2: 0,
      m3: 0,
      l1: 0,
      l2: 0,
      l3: 0,
      code: 0,
    },
  },
  animation: {
    rotate360: keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `,
    glow: keyframes`
    0% {
      box-shadow: 0 0 5px #333;
    }
    50% {
      box-shadow: 0 0 20px #333, 0 0 30px #333;
    }
    100% {
      box-shadow: 0 0 5px #333;
    }
  `,
    float: keyframes`
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  `,
    jiggle: keyframes`
    0% {
      transform: skewX(0deg);
    }
    50% {
      transform: skewX(-10deg);
    }
    100% {
      transform: skewX(0deg);
    }
  `,
    inlineGlow: css`
      animation: ${keyframes`
      0% {
        box-shadow: 0 0 5px #333;
      }
      50% {
        box-shadow: 0 0 20px #333, 0 0 30px #333;
      }
      100% {
        box-shadow: 0 0 5px #333;
      }
    `} 2s infinite;
    `,
    hoverable: css`
      &:hover {
        animation: ${keyframes`
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.05);
        }
        100% {
          transform: scale(1);
        }
      `} 1s infinite;
      }
    `,
  },
  easing: {
    rubber: "",
  },
  input: {
    border: "",
    background: "",
    color: "",
    borderRadius: 0,
  },
  layoutMargin: 0,
  appBorderColor: "",
  appBorderRadius: 0,
  barTextColor: "",
  barHoverColor: "",
  barSelectedColor: "",
  barBg: "",
  brand: {
    title: "",
    url: "",
    image: "",
    target: "", // Add an initializer for the 'target' property
  },
  code: {},
};

const darkTheme: Theme = {
  base: "dark",
  appBg: "blue",
  colorPrimary: "#00000",
  colorSecondary: "#990000",
  brandImage:
    "https://res.cloudinary.com/alvarosaburido/image/upload/v1616082729/as-portfolio/awesome-sushi-logo_aiaydr.png",
  color: {
    primary: "#000",
    secondary: "#000",
    tertiary: "#000",
    ancillary: "#000",
    orange: "#000",
    gold: "",
    green: "",
    seafoam: "",
    purple: "",
    ultraviolet: "",
    lightest: "",
    lighter: "",
    light: "",
    mediumlight: "",
    medium: "",
    mediumdark: "",
    dark: "",
    darker: "",
    darkest: "",
    border: "",
    positive: "",
    negative: "",
    warning: "",
    critical: "",
    defaultText: "",
    inverseText: "",
    positiveText: "",
    negativeText: "",
    warningText: "",
  },
  background: {
    app: "#000",
    bar: "#000",
    content: "#000",
    preview: "#000",
    gridCellSize: 0,
    hoverable: "#000",
    positive: "#000",
    negative: "#000",
    warning: "#000",
    critical: "#000",
  },
  typography: {
    fonts: {
      base: "",
      mono: "",
    },
    weight: {
      regular: 0,
      bold: 0,
    },
    size: {
      s1: 0,
      s2: 0,
      s3: 0,
      m1: 0,
      m2: 0,
      m3: 0,
      l1: 0,
      l2: 0,
      l3: 0,
      code: 0,
    },
  },
  animation: {
    rotate360: keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `,
    glow: keyframes`
    0% {
      box-shadow: 0 0 5px #333;
    }
    50% {
      box-shadow: 0 0 20px #333, 0 0 30px #333;
    }
    100% {
      box-shadow: 0 0 5px #333;
    }
  `,
    float: keyframes`
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  `,
    jiggle: keyframes`
    0% {
      transform: skewX(0deg);
    }
    50% {
      transform: skewX(-10deg);
    }
    100% {
      transform: skewX(0deg);
    }
  `,
    inlineGlow: css`
      animation: ${keyframes`
      0% {
        box-shadow: 0 0 5px #333;
      }
      50% {
        box-shadow: 0 0 20px #333, 0 0 30px #333;
      }
      100% {
        box-shadow: 0 0 5px #333;
      }
    `} 2s infinite;
    `,
    hoverable: css`
      &:hover {
        animation: ${keyframes`
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.05);
        }
        100% {
          transform: scale(1);
        }
      `} 1s infinite;
      }
    `,
  },
  easing: {
    rubber: "",
  },
  input: {
    border: "",
    background: "",
    color: "",
    borderRadius: 0,
  },
  layoutMargin: 0,
  appBorderColor: "",
  appBorderRadius: 0,
  barTextColor: "",
  barHoverColor: "",
  barSelectedColor: "",
  barBg: "",
  brand: {
    title: "",
    url: "",
    image: "",
    target: "", // Add an initializer for the 'target' property
  },
  code: {},
};

interface ViewportStyle {
  width: string;
  height: string;
}

interface CustomViewport {
  name: string;
  styles: ViewportStyle;
}

interface Viewports {
  [key: string]: CustomViewport;
}

const MY_VIEWPORTS: Viewports = {
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

export const preview: Preview = {
  parameters: {
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
        method: "alphabetical",
        includeNmaes: true,
        order: ["Design System", "*"],
      },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
};
