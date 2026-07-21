import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: './', // Use relative pathing so assets load correctly on GitHub Pages
  plugins: [
    react(),
    tailwindcss()
  ],
})
