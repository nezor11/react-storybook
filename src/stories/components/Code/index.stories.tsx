// index.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import { Code } from "./"; // Importa tu componente Code desde su archivo correspondiente

const meta: Meta = {
  title: "System/Code", // Define el título de tu historia
  component: Code, // Especifica el componente asociado a esta historia
};

export default meta;

// Crea una "plantilla" de cómo se mapean los argumentos a la renderización (de SB)
type Story = StoryObj<typeof Code>;

// Define los argumentos por defecto, si es necesario
export const Default: Story = {
  args: {
    directoryPath: "src/stories/components/Code/",
  },
};
