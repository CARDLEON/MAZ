// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://maz.sandboxcardleon.com",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react({
      include: ["**/react/*"],
      experimentalReactChildren: true,
    }),
  ],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
