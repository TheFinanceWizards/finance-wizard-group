import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  build: {
    // Explicit minification (esbuild is fastest, terser gives ~5% smaller output)
    minify: 'esbuild',
    // Warn on chunks > 500KB
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        // Split vendor code into cacheable chunks
        manualChunks: {
          // React core — almost never changes, long cache lifetime
          'vendor-react': ['react', 'react-dom'],
          // Router — separate so route changes don't bust React cache
          'vendor-router': ['react-router-dom'],
          // Framer Motion — large animation library, isolate it
          'vendor-framer': ['framer-motion'],
          // EmailJS — only needed when form is submitted
          'vendor-email': ['@emailjs/browser'],
        },
      },
    },
    // Inline assets smaller than 4KB as base64 (reduces requests)
    assetsInlineLimit: 4096,
  },
})