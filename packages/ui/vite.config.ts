import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: {
        core: './src/core/index.ts',
        system: './src/system/index.ts',
      },
      name: '@monorepo/ui',
      fileName: (format, entry) => {
        if (format === 'cjs') {
          return `ui.${entry}.cjs`;
        }
        return `ui.${entry}.${format}.js`;
      },
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
