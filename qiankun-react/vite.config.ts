import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import qiankun from "vite-plugin-qiankun";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    qiankun("reactApp", {
      useDevMode: true,
    }),
  ],
  base: "http://localhost:3000",
  server: {
    port: 3000,
    hmr: false,
  },
});
