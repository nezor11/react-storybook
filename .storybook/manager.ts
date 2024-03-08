import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "Martinez Storybook",
    brandUrl: "/",
    brandImage: "./nezor.svg",
    brandTarget: "_self",
    colorSecondary: "hotpink",
    appBg: "#f0f0f0",
    appBorderColor: "rgba(0,0,0,0.1)",
    textColor: "#333",
    barTextColor: "#999",
  }),
});
