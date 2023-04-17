import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import qiankun from "vite-plugin-qiankun";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), qiankun("vueApp", { useDevMode: true })],
  base: "http://localhost:3001",
  build: {
    assetsDir: "http://localhost:3001/assets",
  },
  server: {
    port: 3001,
  },
});
