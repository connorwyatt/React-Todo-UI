const webpackMerge = require('webpack-merge'),
  baseConfig = require('./webpack.config.base');

module.exports = webpackMerge(baseConfig, {
  devtool: 'cheap-module-eval-source-map'
});
