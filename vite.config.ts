import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [
        react()
    ],
    optimizeDeps: {
        include: ['echarts', 'prismjs']
    },
    css: {
        preprocessorOptions: {
            scss: {
                silenceDeprecations: ['legacy-js-api']
            }
        }
    },
    resolve: {
        alias: {
            $lib: path.resolve(__dirname, './src/lib'),
            $routes: path.resolve(__dirname, './src/routes'),
            $themes: path.resolve(__dirname, './src/themes')
        }
    },
    server: {
        port: 3000
    },
    test: {
        environment: 'jsdom',
        setupFiles: ['./vitest-setup-react.ts'],
        globals: true,
        include: ['src/**/*.test.{ts,tsx}'],
        exclude: [
            'src/lib/helpers/date.test.ts',
            'src/lib/helpers/withPrevious.test.ts',
            'src/routes/(console)/wizard/support/store.test.ts',
            'node_modules',
            'dist',
            '.idea',
            '.git',
            '.cache'
        ]
    }
});
