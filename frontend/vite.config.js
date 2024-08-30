import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

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
  },
});
