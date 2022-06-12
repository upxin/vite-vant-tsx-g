/// <reference types="vitest" />

import { defineConfig } from 'vite';
import { resolve } from 'path';
import Vue from '@vitejs/plugin-vue';
import VueJsx from '@vitejs/plugin-vue-jsx';
import Legacy from '@vitejs/plugin-legacy';
import createStyleImportPlugin from 'vite-plugin-style-import';
import postCssPxToRem from 'postcss-pxtorem';

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '~/',
        replacement: `${resolve(__dirname, 'src')}/`,
      },
    ],
  },
  plugins: [
    Vue(),
    VueJsx(),
    Legacy({
      targets: { chrome: '49', firefox: '18' },
    }),
    createStyleImportPlugin({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) =>
            `/${process.cwd()}/node_modules/vant/es/${name}/style/index`,
        },
      ],
    }),
  ],
  // Vite自身已经集成PostCSS，无需再次安装。另外也无需单独创建PostCSS配置文件，已集成到vite.config.js的css选项中
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 37.5,
          propList: ['*'],
        }),
      ],
    },
  },
  test: {
    globals: true,
  },
  build: {
    target: 'modules',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
  server: {
    host: '0.0.0.0',
    port: 80,
    https: false,
    open: false,
    cors: true,
    // proxy: {
    //   '/api': {
    //     target: 'http://127.0.0.1:8080',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ''),
    //   },
    // },
  },
});
