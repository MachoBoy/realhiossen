const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    path.resolve('src/index.js')
  ],

  output: {
    filename: 'bundle.js',
    publicPath: path.resolve('public')
  },

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    hot: true
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webapck.HotModuleRepalcementPlugin()
  ]
};
