import { defineConfig } from 'vite';
import type { UserConfig } from 'vite';

import pluginPurgeCss from "vite-plugin-purgecss-updated-v5";

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
      }
    },
    devSourcemap: true,
  },

  appType: 'mpa',

  build: {
    target: ['chrome132', 'firefox138'],
    cssMinify: 'lightningcss',
    sourcemap: true,
  },

  plugins: [pluginPurgeCss()],
}) satisfies UserConfig as UserConfig;
