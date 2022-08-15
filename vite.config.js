import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()], resolve: {
        alias: {
            '@': 'src',
        }
    },
    css: {
        // css预处理器
        // preprocessorOptions: {
        //     less: {
        //         javascriptEnabled: true,
        //         additionalData: `@import "${path.resolve(__dirname, 'src/theme/base.less')}";`
        //     }
        // },
    },
})