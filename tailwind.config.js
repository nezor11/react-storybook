import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  // Toggle dark-mode based on .dark class or data-mode="dark"
  darkMode: ["class", '[data-mode="dark"]'],
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
        // dark: { raw: "(prefers-color-scheme: dark)" },
        // => @media (prefers-color-scheme: dark) { ... }
      },
    },
  },
  variants: {
    backgroundColor: [
      "dark",
      "dark-hover",
      "dark-group-hover",
      "dark-even",
      "dark-odd",
    ],
    borderColor: ["dark", "dark-disabled", "dark-focus", "dark-focus-within"],
    textColor: ["dark", "dark-hover", "dark-active", "dark-placeholder"],
  },
  plugins: [require("tailwindcss-dark-mode")()],
};
