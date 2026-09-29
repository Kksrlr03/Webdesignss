import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('/node_modules/') && id.includes('/three/')) return 'three';
          if (id.includes('/node_modules/') && id.includes('/gsap/')) return 'motion';
        },
      },
    },
  },
});
