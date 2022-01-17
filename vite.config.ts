import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import VitePluginFonts from "vite-plugin-fonts";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginFonts({
      google: {
        families: [
          {
            name: "Space Mono",
            styles: "wght@400;700",
          },
        ],
      },
    }),
  ],
  server: {
    port: 8000,
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
});
