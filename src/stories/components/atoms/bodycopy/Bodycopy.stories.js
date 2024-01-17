import { BodyCopy } from './BodyCopy';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Design System/Atoms/BodyCopy',
  component: BodyCopy,
  tags: ['autodocs'],
  argTypes: {
    text: 'Lorem fistrum ahorarr de la pradera no te digo trigo por no llamarte Rodrigor',
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Paragraph = {
    args: {
        tag: 'p',
    },
};

export const StrongParagraph = {
    args: {
        tag: 'strong',
    },
};

export const H1 = {
    args: {
        tag: 'h1',
    },
};
