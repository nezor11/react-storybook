// ThemeContext.tsx

// biome-ignore lint/style/useImportType: <explanation>
import React, { createContext, useEffect, useState } from "react";
import type { ThemeContextInterface } from "../utils/types/theme";

export const ThemeContext = createContext<ThemeContextInterface | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const isLocalStorageAvailable = () => {
    try {
      localStorage.setItem("test", "test");
      localStorage.removeItem("test");
      return true;
    } catch (e) {
      return false;
    }
  };

  const [darkTheme, setDarkTheme] = useState<boolean>(() => {
    const savedTheme = isLocalStorageAvailable()
      ? localStorage.getItem("theme")
      : null;
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const toggleTheme = () => {
    setDarkTheme((prev) => !prev);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        setDarkTheme(event.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (isLocalStorageAvailable()) {
      localStorage.setItem("theme", darkTheme ? "dark" : "light");
    }
    if (darkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkTheme]);
  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme, setDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
