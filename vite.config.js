import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Default output directory
    sourcemap: false, // Disable source maps for production
    rollupOptions: {
      output: {
        manualChunks: undefined, // Customize chunking if needed
      },
    },
  },
  define: {
    'process.env.NODE_ENV': '"production"',
  },
})
