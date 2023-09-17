import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

// TODO: do something for not building stories and tests
export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true })],
  build: {
    lib: {
      entry: {
        core: './src/core/index.ts',
        // hooks: './src/hooks/index.ts',
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
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
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
