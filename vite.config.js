import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 500, // Reduce warnings for large chunks
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react-vendor'; // React & ReactDOM
            if (id.includes('react-router-dom')) return 'router-vendor'; // React Router
            return 'vendor'; // Other dependencies
          }
        },
      },
    },
  },
});
