import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      // '/api':'http://localhost:8080/'
      '/api':'https://reacte-commerceserver-production.up.railway.app/'
    },
    
  },
  build: {
    chunkSizeWarningLimit: 1000000000 // ajusta este valor al tamaño límite que desees
  }
})
