import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.pdf'], // Ensure PDF files are treated as assets
  base: '/Personal-Portfolio/', // Match this to your repository name
})
