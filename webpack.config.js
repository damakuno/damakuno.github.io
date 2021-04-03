module.exports = {
  entry: './public/app.js',
  output: {
    path: __dirname + '/public/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      loader: 'css-loader'
    }]
  }
}