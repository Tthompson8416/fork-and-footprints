import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/fork-and-footprints/',  // Make sure this matches your GitHub Pages path
  build: {
    assetsDir: 'assets',  // Ensure that assets are placed in the 'assets' folder
  },
});
