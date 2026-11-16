const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  css: { loaderOptions: { css: { url: false } } },
  pwa: {
    name: 'Bloomwell',
    themeColor: '#443627',
    msTileColor: '#443627',
    workboxOptions: { exclude: [/\.map$/, /\.mp4$/, /\.webm$/] },
    iconPaths: { faviconSVG: 'bloomwell-icon.svg' },
  },
});
