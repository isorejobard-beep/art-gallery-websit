
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Le site utilise une feuille CSS standard afin de limiter les alertes W3C.
export default defineConfig({
  base: '/art-gallery-websit/',
  plugins: [react()],
})
