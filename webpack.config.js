const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  mode: process.env.NODE_ENV,
  devServer: {
    publicPath: '/dist/',
    proxy: {
      // context: () => true,
      '*': 'http://localhost:3000',
      '/data': 'http://localhost:3000',
    },
    // contentBase: path.resolve(__dirname, 'dist'),
    // watchContentBase: true,
    // compress: true,
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react'
          ]
        },
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
};