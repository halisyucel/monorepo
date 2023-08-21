import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true })],
  build: {
    lib: {
      entry: {
        core: './src/core/index.ts',
        hooks: './src/hooks/index.ts',
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
});
