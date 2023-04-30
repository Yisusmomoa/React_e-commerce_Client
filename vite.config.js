import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      // '/api':'http://localhost:8080/'
      '/api':'https://reacte-commerceserver-production.up.railway.app/'
    }
  },
  base:'https://Yisusmomoa.github.io/React_e-commerce_Client'
})
