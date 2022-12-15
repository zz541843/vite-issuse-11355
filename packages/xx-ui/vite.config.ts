import {defineConfig} from "vite"
import {resolve} from "path"
import {fileURLToPath, URL} from "node:url";

import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
export default defineConfig({
    plugins:[
        vue({
            reactivityTransform: true
        }), vueJsx(),
    ],
    build:{
        lib:{
            formats: ["es"],
            name: "admin-ui",
            entry: resolve(__dirname,'src/index.ts'),
        },
        minify: "esbuild",
        rollupOptions: {
            external: ['naive-ui'],
            output: {
                dir: "dist",
                entryFileNames: '[name].js',
                chunkFileNames: '[name]-chunk.js',
                exports: 'named',
            },
        },
    },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url))
        },
    },
})
