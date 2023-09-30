import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), dts(), svgr()],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "@monorepo/icons",
    },
    rollupOptions: {
      external: ["react", "./src/prebuild.js", "./src/postbuild.js"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
});
