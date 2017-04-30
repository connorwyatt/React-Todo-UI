const webpack = require('webpack'),
  webpackMerge = require('webpack-merge'),
  baseConfig = require('./webpack.config.base');

module.exports = webpackMerge(baseConfig, {
  devtool: 'hidden-source-map',
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    })
  ]
});
