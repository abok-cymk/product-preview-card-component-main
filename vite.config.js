import { defineConfig } from "vite"

export default defineConfig({
  root: "./",
  build: {
    outDir: "dist",
  },
  server: {
    port: 3000,
  },
  base: "/product-preview-card-component-main",
});