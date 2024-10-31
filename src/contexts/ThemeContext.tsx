// ThemeContext.tsx
import { createContext } from "react";
import type { ThemeContextInterface } from "../utils/types/theme";

const ThemeContext = createContext<ThemeContextInterface | null>(null);

export { ThemeContext };

// biome-ignore lint/style/useImportType: <explanation>
import React, { startTransition, useEffect, useState } from "react";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      return currentTheme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const toggleTheme = () => {
    startTransition(() => {
      setDarkTheme((curr) => !curr);
    });
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        setDarkTheme(event.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    document.body.className = darkTheme ? "theme-dark" : "theme-light";
    localStorage.setItem("theme", darkTheme ? "dark" : "light");
  }, [darkTheme]);
  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme, setDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
