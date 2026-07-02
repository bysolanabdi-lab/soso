import { defineConfig } from "vinxi";
import { tandemStart } from "@tanstack/react-start/provider";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsconfigPaths()
  ],
  routers: {
    client: {
      entry: "./src/client.tsx", // Vinxi a besoin de savoir où est le client
    },
    ssr: {
      entry: "./src/server.ts", // Pointe vers ton fichier src/server.ts
    }
  }
});
