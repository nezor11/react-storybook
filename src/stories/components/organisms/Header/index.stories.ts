import { Meta, StoryObj } from "@storybook/react";
import { Header } from ".";

const meta: Meta<typeof Header> = {
  title: "Design System/Organisms/Header",
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Header is a component that renders a header with a user profile. It is used to display a header in a page or section. It accepts the following props: user which is an object containing the user name, job title, icons data, contact details, and image details.",
      },
    },
  },
  argTypes: {
    user: {
      description:
        "The user object contains the user's name, job title, icons data, contact details, and image details.",
      control: {
        type: "object",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    user: {
      name: "Jane Doe",
      jobTitle: "Frontender",
      iconsData: [{ name: "CSS3Icon", width: "1em", height: "1em" }],
      contactDetail: {
        title: "Casa Barcelona",
        phone: "+34609457202",
        email: "contact@nezort.es",
        address: "08025 Barcelona",
      },
      imageDetail: {
        image: "https://source.unsplash.com/random/300x300/?face",
        alt: "Alt text",
        width: 300,
        height: 300,
      },
    },
  },
};
