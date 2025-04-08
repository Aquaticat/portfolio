import {
  dirname,
  resolve,
} from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import type { UserConfig } from 'vite';

import pluginPurgeCss from 'vite-plugin-purgecss-updated-v5';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // root: import.meta.dir,

  // Relative paths for GitHub Pages compatibility.
  base: './',

  css: {
    preprocessorMaxWorkers: true,
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        silenceDeprecations: ['import'],
      },
    },
    devSourcemap: true,
  },

  appType: 'mpa',

  build: {
    target: ['chrome132', 'firefox138'],
    cssMinify: 'lightningcss',
    sourcemap: true,

    // For deploying to GitHub Pages
    outDir: 'docs',

    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        search: resolve(__dirname, 'search.html'),
        about: resolve(__dirname, 'about.html'),
      },
    },
  },

  plugins: [pluginPurgeCss()],
}) satisfies UserConfig as UserConfig;
