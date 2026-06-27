import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/YeongL.github.io/',  // GitHub repo 이름에 맞게 수정
})
