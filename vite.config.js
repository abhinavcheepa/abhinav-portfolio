import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/abhinav-portfolio/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('three')) return 'three';
          if (id.includes('@react-three')) return 'fiber';
          if (id.includes('framer-motion')) return 'motion';
        }
      }
    }
  }
})
