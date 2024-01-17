import { TitleCopy } from './TitleCopy';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Design System/Atoms/TitleCopy',
  component: TitleCopy,
  tags: ['autodocs'],
  argTypes: {
    text: 'Rodrigor',
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Title = {
    args: {
        title: 'h1',
    },
};
