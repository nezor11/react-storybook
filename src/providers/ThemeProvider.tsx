import type { ReactNode } from "react";
import React, {
  createContext,
  startTransition,
  useEffect,
  useState,
} from "react";
import type { ThemeContextInterface } from "../utils/types/theme";

export const ThemeContext = createContext<ThemeContextInterface | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(() => {
    // Inicializa el tema desde localStorage o según la preferencia del sistema
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const toggleTheme = () => {
    startTransition(() => {
      setDarkTheme((prev) => !prev);
    });
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        setDarkTheme(event.matches);
      }
    };

    // Agrega el listener para detectar cambios del sistema
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
