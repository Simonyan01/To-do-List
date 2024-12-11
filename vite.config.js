import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@api': '/src/api',
      '@components': '/src/components',
      '@data': '/src/data',
      '@styles': '/src/styles',
      '@utils': '/src/utils',
    }
  }
})