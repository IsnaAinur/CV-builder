import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Tambahkan properti base sesuai dengan nama repository GitHub kamu
export default defineConfig({
  plugins: [react()],
  base: '/CV-builder/', 
})