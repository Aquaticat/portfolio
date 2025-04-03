import { defineConfig } from 'vite';
import type { UserConfig } from 'vite';


export default defineConfig({
  root: import.meta.dir,

  // Relative paths for GitHub Pages compatibility.
  base: './',

  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        silenceDeprecations: ['import'],
      }
    }
  },

  appType: 'mpa',
}) satisfies UserConfig as UserConfig;
