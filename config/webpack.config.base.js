const path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: './src/bootstrap.tsx',
    libs: [
      'core-js',
      'react',
      'react-dom'
    ]
  },
  output: {path: path.resolve(__dirname, '..', 'dist'), filename: '[name].[chunkhash].js'},
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react']
            }
          },
          {
            loader: 'ts-loader'
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader',
            options: {
              url: false,
              minimize: true,
              discardComments: {removeAll: true}
            }
          }, {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['app', 'libs']
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {collapseWhitespace: true},
      inject: true
    }),
    new CopyWebpackPlugin([{
      from: 'src/assets',
      to: 'assets'
    }])
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js']
  }
};