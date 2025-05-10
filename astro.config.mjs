// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://maz.sandboxcardleon.com",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
    define: {
      "process.env": process.env,
    },
  },

  integrations: [react()],
});
