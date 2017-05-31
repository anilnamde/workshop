const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/js/component/main.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js'
  },

  module: {
    rules: [
      {test: /\.(js|jsx)$/, use: 'babel-loader'}
    ]
  }
};

module.exports = config;