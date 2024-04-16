import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ContactDetail } from ".";
import { TitleCopy } from "../../atoms/TitleCopy";
import { Code } from "../../system/Code";

const meta: Meta<typeof ContactDetail> = {
  title: "Design System/Molecules/Contact Details",
  component: ContactDetail,
  parameters: {
    docs: {
      description: {
        component:
          "Contact details component with a contactDetail prop that accepts a title, phone, email, and address. It is used to display the contact details of a business or individual.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    contactDetail: {
      description: "The contact details of a business or individual.",
      table: {
        defaultValue: {
          summary: "contactDetail: {}",
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    contactDetail: {
      title: "Casa Barcelona",
      phone: "+34609457202",
      email: "contact@nezort.es",
      address: "08025 Barcelona",
    },
  },
};

export const SourceCode: Story = {
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
      <TitleCopy text="Component source code:" mods="text-base" />
      <Code directoryPath="src/stories/components/molecules/ContactDetails/" />
    </>
  ),
};
