import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "My Storybook",
    brandUrl: "https://martinez.place",
    brandImage: "https://placehold.it/350x150",
    brandTarget: "_blank",
    colorSecondary: "hotpink",
    appBg: "#f0f0f0",
    appBorderColor: "rgba(0,0,0,0.1)",
    textColor: "#333",
    barTextColor: "#999",
  }),
});
