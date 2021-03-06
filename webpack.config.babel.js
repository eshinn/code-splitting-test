import HTMLWebpackPlugin from 'html-webpack-plugin'

module.exports = {
  entry: {
    'js/app': ['./src/app.js'],
  },
  output: {
    filename: '[name].js',
    chunkFilename: 'js/_[name].chunk.[id].js',
    path: `${__dirname}/dist`,
  },
  resolve: {
    modules: [
      'node_modules',
      'src',
    ]
  },
  devtool: 'source-map',
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
    })
  ]
}
