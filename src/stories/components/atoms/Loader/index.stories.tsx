import { Code } from "@/stories/components/system/Code";
import { Meta } from "@storybook/react";
import React from "react";
import Loader from ".";

const meta: Meta<typeof Loader> = {
  title: "Design System/Atoms/Loader",
  component: Loader,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
  argTypes: {},
};

export default meta;

export const Default = {
  args: {},
};

export const SourceCode = {
  parameters: {
    layout: "centered",
    controls: {
      disable: true,
    },
    actions: {
      disable: true,
    },
  },
  render: () => (
    <>
      <Code directoryPath="src/stories/components/atoms/Loader/" />
    </>
  ),
};
