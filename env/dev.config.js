'use strict';

let path = require('path');
let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: {
        app: path.join(__dirname, '../app/mainDev.js'),
        vendor: [
            'lodash',
            'jquery'
        ]
    },
    output: {
        path: path.join(__dirname, '../dist/js'),
        filename: '[name].bundle.js'
    },
    // Bigger file but faster compiling
    devtool: 'eval-cheap-module-source-map',
    // devtool: 'source-map',
    module: {
        loaders: [
            {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
            {
                test: /\.es6\.html$/,
                loader: 'babel?presets[]=es2015!template-string'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
            },
            {
                test:/\.json$/,
                exclude: /(node_modules)/,
                loader: 'json'
            },
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: [
                        'es2015',
                        'react',
                        'stage-2'
                    ]
                }
            },
            {
                test: /\.js$/,
                exclude: [/(node_modules)/],
                loader: 'babel',
                query: {
                    presets: [
                        require.resolve('babel-preset-es2015'),
                        require.resolve('babel-preset-stage-2')
                    ]
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            DEVELOPMENT: true
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        new ExtractTextPlugin('../css/app.styles.min.css', {
            allChunks: true
        }),
    ],
    resolve:{
        root: path.join(__dirname, '../node_modules')
    },
    resolveLoader: {
        root: path.join(__dirname, '../node_modules')
    }
};
