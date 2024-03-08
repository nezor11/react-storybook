import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  // Toggle dark-mode based on .dark class or data-mode="dark"
  darkMode: ["dark", '[data-mode="dark"]'],
  theme: {
    fontFamily: {
      charlie: ["Raleway", "sans-serif"],
    },
    extend: {
      colors: {
        primary: colors.rose,
        transparent: "transparent",
      },
      screens: {
        dark: { raw: "(prefers-color-scheme: dark)" },
        // => @media (prefers-color-scheme: dark) { ... }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
