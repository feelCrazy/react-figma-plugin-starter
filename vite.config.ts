import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import { viteSingleFile } from "vite-plugin-singlefile"

import { resolve } from "path"

const entries = {
  main: resolve(__dirname, "./src/code.ts"),
  ui: resolve(__dirname, "./index.html"),
}

const input = {}

if (process.env["INPUT"]) {
  const entry = process.env["INPUT"]
  input[entry] = entries[entry]
}
export default defineConfig({
  plugins: [react(), viteSingleFile({ useRecommendedBuildConfig: false })],
  build: {
    target: "esnext",
    assetsInlineLimit: 100000000,
    chunkSizeWarningLimit: 100000000,
    cssCodeSplit: false,
    outDir: "./dist",
    emptyOutDir: false,
    rollupOptions: {
      input,
      output: {
        manualChunks: (chunk) => "all.js",
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
})
