import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@components': '/src/components',
      '@data': '/src/data',
      '@utils': '/src/utils',
    }
  }
})