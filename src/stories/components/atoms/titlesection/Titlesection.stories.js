import { TitleSection } from './TitleSection';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Design System/Atoms/TitleSection',
  component: TitleSection,
  tags: ['autodocs'],
  argTypes: {
    text: 'Me cago en tus muelas',
  },
};

export const H2 = {
  args: {
      header: 'h2',
  },
};