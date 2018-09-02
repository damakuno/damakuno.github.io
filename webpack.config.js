const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const HotModuleReplacementPluginConfig = new webpack.HotModuleReplacementPlugin();

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

const ExtractTextPluginConfig = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  disable: process.env.NODE_ENV === 'development'
});

const CleanWebpackPluginConfig = new CleanWebpackPlugin(['dist']);

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      },
      {
        test: /\.(less|css)$/,
        use: ExtractTextPluginConfig.extract({
          use: [{
            loader: 'css-loader', options: { sourceMap: true }
          }, {
            loader: 'less-loader', options: { sourceMap: true }
          }],
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [CleanWebpackPluginConfig, 
            HtmlWebpackPluginConfig, 
            ExtractTextPluginConfig, 
            HotModuleReplacementPluginConfig],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/'
  }
};