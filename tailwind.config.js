import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  // Toggle dark-mode based on .dark class or data-mode="dark"
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    fontFamily: {
      charlie: ["Charlie Text Regular", "sans-serif"],
    },
    extend: {
      colors: {
        primary: colors.rose,
        transparent: "transparent",
      },
    },
  },
  plugins: [],
};
