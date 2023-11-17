import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import inject from '@rollup/plugin-inject'

const isProduction = process.env.NODE_ENV === 'production';

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react(),
  ],
  build:
    isProduction
      ? {
        rollupOptions: {
          plugins: [inject({ Buffer: ['buffer', 'Buffer'] })],
        },
      }
      : undefined,
  define: {
    'process.env.ANCHOR_BROWSER': true,
  },
})
