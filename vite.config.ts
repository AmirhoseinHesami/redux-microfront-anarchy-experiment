import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vue from "@vitejs/plugin-vue";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    vue(),
    svelte({
      compilerOptions: {
        runes: true,
        compatibility: {
          componentApi: 4,
        },
      },
    }),
  ],
});
