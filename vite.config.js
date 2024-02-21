import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import vitePluginRequire from "vite-plugin-require";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginRequire.default()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
