import { StoryObj, Meta } from '@storybook/react';
import { BodyCopy } from '.';


const meta: Meta<typeof BodyCopy> = {
  title: 'Design System/Atoms/BodyCopy',
  component: BodyCopy,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text', defaultValue: 'Lorem fistrum ahorarr de la pradera no te digo trigo por no llamarte Rodrigor' },
    mods: { control: 'text', defaultValue: 'text-base' },
  },
};

export default meta;

//create a “template” of how args map to rendering (from SB)
type Template = StoryObj<typeof BodyCopy>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Paragraph = {
    args: {
        tag: 'p',
        mods: 'text-base',
    },
};

export const StrongParagraph = {
    args: {
        tag: 'strong',
        mods: 'text-base',
    },
};