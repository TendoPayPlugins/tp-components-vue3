import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'
import path from 'path'

export default defineConfig({
    plugins: [
        HstVue(),
    ],
    setupFile: path.resolve(__dirname, './src/histoire.setup.ts'),
    vite: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
    },
    viteNodeInlineDeps: [/@heroicons.+/],
    storyMatch: ['**/*.story.vue'],
    theme: {
        title: 'TpComponents Vue3',
        logo: {
            square: './src/assets/logo.png',
            light: './src/assets/logo.png',
            dark: './src/assets/logo.png',
        },
        logoHref: 'https://tendo.ph',
    }
})
