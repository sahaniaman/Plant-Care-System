import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/predict': {
        target: 'https://plant-care-system.onrender.com',
        changeOrigin: true,
        secure: true,
      },
    },
    port: 8080,  // Change port if needed
    https: true, // Set to true if using HTTPS for development
  },
});
