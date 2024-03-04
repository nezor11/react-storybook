// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)"],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-styling",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
    "@storybook/addon-a11y",
    "storybook-dark-mode",
    {
      name: "@storybook/addon-storysource",
      options: {
        rule: {
          // test: [/\.stories\.jsx?$/], This is default
          include: [path.resolve(__dirname, "../src")], // You can specify directories
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false },
        },
      },
    },
    {
      name: "@storybook/addon-docs",
      options: {
        sourceLoaderOptions: {
          injectStoryParameters: false,
        },
      },
    },
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  typescript: {
    reactDocgen: "react-docgen",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      // 👇 Default prop filter, which excludes props from node_modules
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: async (config) => {
    config.plugins?.push(
      /** @see https://github.com/aleclarson/vite-tsconfig-paths */
      tsconfigPaths({
        projects: [path.resolve(path.dirname(__dirname), "tsconfig.json")],
      })
    );

    return config;
  },
};

export default config;
