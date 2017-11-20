import webpack from 'webpack';
import UniformPropsPlugin from '../../../dist/index.js';

module.exports = {
  entry: './index.js',
  output: {
    filename: '[name].js'
  },
  module: {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/
      }]
  },
  plugins: [
    new UniformPropsPlugin({size: 'small'}),
    /*new webpack.ProvidePlugin({
          React: 'react',
        }),*/
  ]
};

