import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
// GitHub Pages project site: https://<user>.github.io/MyWebsite/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/MyWebsite/' : '/',
  plugins: [react(), tailwindcss()],
}))
