const path = require('path')
const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
  publicPath: isDevelopment ? '/' : '/easy-go-top/',
  outputDir: path.resolve(__dirname, './docs/'),
  css: { extract: isDevelopment },
  configureWebpack: {
    entry: isDevelopment ? './example/main.js' : './documentation/main.js',
    output: {
      libraryExport: 'default'
    }
  }
}
