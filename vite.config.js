import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Configura el proxy para redirigir solicitudes que comiencen con "/api"
      '/api': {
        target: 'http://githubdatafech.somee.com', // URL del servidor de la API
        changeOrigin: true, // Cambia el origen de la solicitud al servidor de la API
        rewrite: (path) => path.replace(/^\/api/, ''), // Elimina el prefijo "/api" de la URL
      },
    },
  },
});