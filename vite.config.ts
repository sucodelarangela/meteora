import { fileURLToPath, URL } from 'node:url';
import { VitePWA } from "vite-plugin-pwa";

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const getCache = ({ name, pattern }: any) => ({
  urlPattern: pattern,
  handler: "CacheFirst" as const,
  options: {
    cacheName: name,
    expiration: {
      maxEntries: 500,
      maxAgeSeconds: 60 * 60 * 24 * 365 * 2 // 2 years
    },
    cacheableResponse: {
      statuses: [200]
    }
  }
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA({
    workbox: {
      runtimeCaching: [
        getCache({
          pattern: /^(https|http):\/\/i.dummyjson.com\/data\/products\/\d{2}\/\d{1,2}\.(jpg|png|webp)/,
          name: "local-images1"
        }),

      ]
    }
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
