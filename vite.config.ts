import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { generateStaticHtmlPlugin } from "./vite-plugins/generate-static-html.ts";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    generateStaticHtmlPlugin()
  ],
  build: {
    outDir: "dist/client",
  }
});
