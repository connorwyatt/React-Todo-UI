const path = require('path'),
  fs = require('fs'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  assetsLocation = 'src/assets',
  assetsExists = fs.existsSync(path.resolve(__dirname, '..', assetsLocation));

const plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    names: ['app', 'libs']
  }),
  new HtmlWebpackPlugin({
    template: './src/index.html',
    minify: {collapseWhitespace: true},
    inject: true
  })
];

if (assetsExists) {
  plugins.push(
    new CopyWebpackPlugin([{
      from: assetsLocation,
      to: 'assets'
    }])
  );
}

module.exports = {
  entry: {
    app: './src/bootstrap.tsx',
    libs: [
      'axios',
      'babel-polyfill',
      'react',
      'react-dom',
      'react-redux',
      'redux',
      'redux-saga'
    ]
  },
  output: {path: path.resolve(__dirname, '..', 'dist'), filename: '[name].[chunkhash].js'},
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        pathRewrite: {'^/api': ''}
      }
    }
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
  plugins: plugins,
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js']
  }
};
