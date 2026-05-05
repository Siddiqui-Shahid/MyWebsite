import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
// GitHub Pages project site: https://<user>.github.io/<repo>/
export default defineConfig(({ command }) => ({
  base:
    command === 'build'
      ? `/${(process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '').trim() || 'MyWebsite'}/`
      : '/',
  plugins: [react(), tailwindcss()],
}))
