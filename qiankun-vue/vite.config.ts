import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import qiankun from "vite-plugin-qiankun";
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), qiankun("vueApp", { useDevMode: true })],
  resolve: {
    alias: { "@": resolve(__dirname, "./src") },
  },
  base: "http://localhost:3001",
  server: {
    port: 3001,
  },
  experimental: {
    renderBuiltUrl(filename, { type }) {
      if (type === "asset") {
        return "http://localhost:3001/assets/" + filename;
      } else {
        return { relative: true };
      }
    },
  },
});
