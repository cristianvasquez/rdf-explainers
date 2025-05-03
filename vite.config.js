import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: './', // Ensure assets use relative paths

  plugins: [
    vue(), nodePolyfills({
      include: ['path', 'stream', 'util'], exclude: ['http'], globals: {
        Buffer: true, global: true, process: true,
      }, overrides: {
        fs: 'memfs',
      }, protocolImports: true,
    })],
  build: {
    outDir: 'hello_widget/static',
    lib: {
      entry: ["src/app/main.js"],
      formats: ["es"],
    },
  },
})
