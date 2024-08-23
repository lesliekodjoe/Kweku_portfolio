import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/kwekuyamoah.github.io/",
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src")}],
  },
  build: {
    outDir: 'build', // Specify the output directory as 'build'
  },
})

