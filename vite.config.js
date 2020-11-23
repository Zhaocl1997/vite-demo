
import { resolve } from 'path';

function pathResolve(dir) {
    return resolve(__dirname, '.', dir);
}

module.exports = {
    port: 80, // 服务端口
    cors: true,
    emitManifest: true,
    proxy: { // 代理
        // // string shorthand
        // "/foo": "http://localhost:4567/foo",
        // // with options
        // "/api": {
        //     target: "http://jsonplaceholder.typicode.com",
        //     changeOrigin: true,
        //     rewrite: (path) => path.replace(/^\/api/, ""),
        // },
    },
    /**
     * Import alias. The entries can either be exact request -> request mappings
     * (exact, no wildcard syntax), or request path -> fs directory mappings.
     * When using directory mappings, the key **must start and end with a slash**.
     * ```
     */
    alias: {
        '/@/': pathResolve('src'),
    },
    transpileDependencies: [
        'vuex-module-decorators'
    ],

    // The package will be recompiled using rollup, and the new package compiled into the esm module specification will be put into node_modules/.vite_opt_cache
    optimizeDeps: {
        include: ['ant-design-vue/es/locale/zh_CN', '@ant-design/icons-vue'],
    },
};