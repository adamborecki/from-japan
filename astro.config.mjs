import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://adamborecki.github.io',
  base: '/from-japan/',
  trailingSlash: 'ignore',
  build: {
    assets: 'assets',
  },
});
