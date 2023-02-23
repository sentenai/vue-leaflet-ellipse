import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: "dist",
    lib: {
      entry: path.resolve(__dirname, "index.ts"),
      name: "vue-leaflet-ellipse",
    },
    rollupOptions: {
      external: ["vue", "@vue-leaflet/vue-leaflet"],
      input: {
        index: path.resolve(__dirname, "index.js"),
      },
      output: [
        {
          entryFileNames: ({ name }) => `${name}.es.js`,
          format: "esm",
          dir: path.resolve(__dirname, "dist"),
        },
        {
          entryFileNames: ({ name }) => `${name}.umd.js`,
          format: "commonjs",
          exports: "named",
          dir: path.resolve(__dirname, "dist"),
        },
      ],
    },
  },
});
