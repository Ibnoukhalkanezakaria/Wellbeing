const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  css: { loaderOptions: { css: { url: false } } },
  pwa: {
    name: 'Bloomwell',
    themeColor: '#1d2524',
    msTileColor: '#1d2524',
    workboxOptions: { exclude: [/\.map$/, /\.mp4$/, /\.webm$/] },
    iconPaths: { faviconSVG: 'bloomwell-icon.svg' },
  },
});
