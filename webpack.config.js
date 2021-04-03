let path = require('path');

module.exports = {
  entry: './public/app.js',
  output: {
    path: path.resolve(__dirname + '/public/dist'),
    publicPath: "/public/dist/",
    filename: 'bundle.js'
  },
  devServer: {
    watchContentBase: true
  },
  module: {
    rules: [{
      test: /\.css$/i,
      use: ["style-loader", "css-loader"]
    }]
  }
}