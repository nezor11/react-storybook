import type { Meta, StoryObj } from "@storybook/react";
import { InfoItem } from ".";

const meta: Meta<typeof InfoItem> = {
  title: "Design System/Molecules/Info Item",
  component: InfoItem,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    info: {
      company: "Lucas",
      date: "2020 > Current",
      jobTitle: "Amatomaa  developer",
      jobDesc:
        "Benemeritaar me cago en tus muelas pecador no te digo trigo por no llamarte Rodrigor al ataquerl llevame al sircoo benemeritaar diodenoo amatomaa al ataquerl ese pedazo de. Amatomaa por la gloria de mi madre fistro diodenoo fistro me cago en tus muelas no te digo trigo por no llamarte Rodrigor.",
    },
  },
};
