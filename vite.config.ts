import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), dts({ include: ['lib'] }), libInjectCss()],
    build: {
        lib: {
            entry: resolve(__dirname, 'lib/main.ts'),
            formats: ['es'],
            name: 'ProgressCenterLibrary',
            fileName: 'main',
        },
        copyPublicDir: false,
        rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime'],
        },
    },
});
