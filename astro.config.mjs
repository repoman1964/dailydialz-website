// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://dailydialz.com",
  trailingSlash: "never",
  server: {
    host: true,
    port: 4321,
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      // Allow ngrok (and similar) tunnels to hit the Vite/Astro dev server
      allowedHosts: [".ngrok-free.app", ".ngrok.io", ".ngrok.app"],
    },
  },
});
