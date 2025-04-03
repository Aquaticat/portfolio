import { defineConfig } from 'vite';
import type { UserConfig } from 'vite';


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
  }
}) satisfies UserConfig as UserConfig;
