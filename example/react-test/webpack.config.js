/*
 *  webpack1.x迁移到2.x需要注意：
 *     1、extract-text-webpack-plugin: https://webpack.js.org/guides/migrating/#extracttextwebpackplugin-breaking-change
 * 
 */
var path = require('path');
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var DashboardPlugin = require('webpack-dashboard/plugin');
var UniformPropsPlugin = require('../../dist/index.js').default;

module.exports = {
    entry: {
      app: './components/index.jsx',
    },
    output: {
        path: path.resolve(__dirname, 'public/assets'),
        filename: 'js/[name].js',
        publicPath: '/assets/'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'babel-loader',
                    query: {
                        presets: ['react', 'es2015', 'stage-0'],
                        compact: false
                    }
                },
            ]
        },
        {
            test: /\.css$/,
            exclude: '/node_modules/',
            use: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader']})
        }, {
            test: /\.scss$/,
            use: ['style-loader',
                'css-loader', 'sass-loader']
        }, {

        }],
    },
    plugins: [
        new webpack.ProvidePlugin({
          React: 'react',
        }),
        new UniformPropsPlugin({options: true}),
        new ExtractTextPlugin('style.css')
    ]
}
