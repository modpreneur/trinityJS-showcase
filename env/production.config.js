// 'use strict';
//
// let path = require('path');
// let webpack = require('webpack');
// let ExtractTextPlugin = require('extract-text-webpack-plugin');
//
// module.exports = {
//     entry: {
//         app: path.join(__dirname, '../app/main.js')
//     },
//     output: {
//         path: path.join(__dirname, '../dist/js'),
//         filename: '[name].bundle.min.js'
//     },
//     module: {
//         loaders: [
//             {
//                 test: /\.css$/,
//                 loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
//             },
//             {
//                 test: /\.less$/,
//                 loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
//             },
//             {
//                 test: /\.es6\.html$/,
//                 loader: 'babel?presets[]=es2015!template-string'
//             },
//             {
//                 test:/\.json$/,
//                 exclude: /(node_modules)/,
//                 loader: 'json'
//             },
//             {
//                 test: /\.jsx$/,
//                 exclude: /(node_modules)/,
//                 loader: 'babel',
//                 query: {
//                     presets: [
//                         'es2015',
//                         'react',
//                         'stage-2'
//                     ]
//                 }
//             },
//             {
//                 test: /\.js$/,
//                 exclude: [/(node_modules)/, /(query-builder)/],
//                 loader: 'babel',
//                 query: {
//                     presets: [
//                         'es2015',
//                         'stage-2'
//                     ]
//                 }
//             }
//         ]
//     },
//     plugins:[
//         new webpack.DefinePlugin({
//             // React libraries
//             "process.env": {
//                 NODE_ENV: JSON.stringify("production")
//             },
//             DEVELOPMENT: false
//         }),
//         new webpack.optimize.DedupePlugin(),
//         new webpack.optimize.UglifyJsPlugin({
//             sourceMap: true,
//             comments: false
//         }),
//         new ExtractTextPlugin('../css/app.styles.min.css', {
//             allChunks: true
//         }),
//
//     ],
//     resolve:{
//         root: path.join(__dirname, '../node_modules')
//     },
//     resolveLoader: {
//         root: path.join(__dirname, '../node_modules')
//     }
// };