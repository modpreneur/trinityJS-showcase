'use strict';

let path = require('path');
let webpack = require('webpack');

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
            {
                test: /\.es6\.html$/,
                loader: 'babel?presets[]=es2015!template-string'
            },
            {
                test: /\.css$/,
                loader: 'style!css-loader'
            },
            {
                test: /\.less$/,
                loader: 'style!css-loader!less-loader'
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
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
    ],
    resolve:{
        root: path.join(__dirname, '../node_modules')
    },
    resolveLoader: {
        root: path.join(__dirname, '../node_modules')
    }
};
