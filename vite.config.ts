import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
    test: {
        globals: true,
        setupFiles: 'src/setupTests.ts',
        includeSource: ['src/**/*.spec.ts', 'src/**/*.test.ts'],
    },
    plugins: [vue(), dts({outDir: 'dist', insertTypesEntry: true})],
    resolve: {
        alias: {
            '~': resolve(__dirname, 'src', 'components'),
        },
    },
    build: {
        manifest: true,
        minify: true,
        reportCompressedSize: true,
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            formats: ['es'],
            name: 'TpComponentsVue3',
            fileName: 'tp-components-vue3',
        },
    },
})
