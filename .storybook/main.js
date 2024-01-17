/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../src/stories/**/*.stories.@(js|jsx)'],
   staticDirs: ['../public'],
   addons: [
     '@storybook/addon-links',
     '@storybook/addon-essentials',
     '@storybook/addon-interactions',
     "@storybook/addon-styling-webpack",
     '@storybook/addon-themes'
   ],
   framework: {
     name: '@storybook/react-vite',
     options: {},
   },
   docs: {
     autodocs: 'tag',
   },
 };
 export default config;