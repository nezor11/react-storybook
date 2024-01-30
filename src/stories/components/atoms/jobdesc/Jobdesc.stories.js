import { SubtitleCopy } from './JobDesc';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Design System/Atoms/JobDesc',
  component: SubtitleCopy,
  tags: ['autodocs'],
  argTypes: {
    text: 'Papaar papaar',
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const H2 = {
  args: {
    subtitle: 'h2',
  },
};
