import { defineConfig } from 'vite';

import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      name: '@monorepo/ui',
      entry: './src/index.ts',
      fileName: (format) => format === 'umd' ? 'ui.umd.cjs' : 'ui.es.js',
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React'
        },
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/setup.ts'],
    testMatch: ['./src/**/*.test.tsx', './src/**/*.test.ts'],
    globals: true,
  },
});
