const { resolve } = require("path");
const { defineConfig } = require("vite");
import vue from '@vitejs/plugin-vue'

module.exports = defineConfig({
  plugins: [
    vue({
      reactivityTransform: true
    })
  ],
  build: {
    target: "esnext",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        novel: resolve(__dirname, "novel.html"),
      },
    },
  },
});
