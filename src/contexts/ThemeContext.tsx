import { createContext } from "react";
import { ThemeContextInterface } from "../utils/types/theme";

export const ThemeContext = createContext<ThemeContextInterface | null>(null);
