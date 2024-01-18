import '../src/styles/global.css';

// Replace your-renderer with the renderer you are using (e.g., react, vue3)
import { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['Design System', ['Atoms', ['TitleCopy', 'JobDesc', 'TitleSection','BodyCopy'], 'Molecules', 'Organisms', 'Templates', 'Pages']],
      },
    },
  },
};

export default preview;