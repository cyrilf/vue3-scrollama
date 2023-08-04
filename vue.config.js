const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  css: {
    extract: true,
  },
  configureWebpack: {
    externals: {
      vue: 'Vue',
    },
    output: {
      libraryExport: 'default',
    },
  },
  chainWebpack: (config) => {
    config.optimization.delete('splitChunks');
    config.entryPoints.delete('app');

    config.entry('ScroLlama')
      .add('./src/main.js')
      .end()
      .output
      .filename('ScroLlama.js')
      .library('ScroLlama')
      .libraryTarget('umd')
      .end();
  },
})
