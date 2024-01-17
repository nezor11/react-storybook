import '../src/index.css';
import '../src/tailwind.css'; // replace with the name of your tailwind css file

//👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
/** @type { import('@storybook/react').Preview } */
const preview = {
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