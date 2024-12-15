import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  plugins: [
    nodePolyfills({
      // Whether to polyfill `node:` protocol imports.
      protocolImports: true,
    })
  ],
  resolve: {
    alias: {
      'fs': 'browserify-fs',  // Polyfill for 'fs' module
    }
  },
  build: {
    rollupOptions: {
      external: ["@babel"],
    },
    commonjsOptions: {
      transformMixedEsModules: true
    }
  },
  server: {
    headers: {
      'X-Frame-Options': 'ALLOWALL',
      'Content-Security-Policy': "frame-ancestors *"
    }
  }
});