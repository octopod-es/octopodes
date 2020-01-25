const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  mode: process.env.NODE_ENV,
  devServer: {
    publicPath: '/',
    proxy: {
      // context: () => true,
      '*': 'http://localhost:4000',
      '/data': 'http://localhost:4000',
    },
    // contentBase: path.resolve(__dirname, 'dist'),
    // compress: true,
    port: 9001,
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
            '@babel/preset-react',
          ],
        },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};
