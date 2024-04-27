import path from "path"
import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr";

import { defineConfig } from "vite"

export default defineConfig({
  plugins: [   react(),
    svgr({
    // svgr options: https://react-svgr.com/docs/options/
    svgrOptions: { exportType: "default", ref: true, svgo: false, titleProp: true },
     include: "**/*.svg",
    }),],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
