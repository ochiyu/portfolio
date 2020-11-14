module.exports = {
  publicPath: './',
  transpileDependencies: [
    'vuetify'
  ],
  pages: {
    index: {
      entry: 'src/main.js', // 必須パラメータ
      title: 'ochiyu Page'
    }
  }
}
