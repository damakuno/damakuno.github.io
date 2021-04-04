let path = require('path');

module.exports = {
  mode: 'production',
  entry: './public/app.js',
  output: {
    path: path.resolve(__dirname + '/public/dist'),
    publicPath: "/public/dist/",
    filename: 'bundle.js'
  },
  devServer: {  
    watchContentBase: true
  },
  watchOptions: {
    ignored: ['**/res', '**/node_modules', '**/src/aup'],
  },
  module: {
    rules: [{
      test: /\.css$/i,
      use: ["style-loader", "css-loader"]
    }]
  }
}