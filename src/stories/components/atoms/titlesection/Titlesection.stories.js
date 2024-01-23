import { TitleSection } from './TitleSection';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Design System/Atoms/TitleSection',
  component: TitleSection,
  tags: ['autodocs'],
  argTypes: {
    text: 'Me cago en tus muelas',
    mods: 'text-3xl',
  },
};

export const H3 = {
  args: {
      header: 'h3',
      mods: 'text-3xl',
  },
};