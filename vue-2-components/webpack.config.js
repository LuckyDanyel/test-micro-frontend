const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: './UI/index.js',
    module: {
        rules: [
            {
                test: /\.vue$/i,
                loader: 'vue-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.ts?$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                },
                exclude: /node_modules/,
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.vue'],
    },

    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new ModuleFederationPlugin({ 
            name: 'vue2App', 
            filename: 'remote.js', 
            library: { type: "var", name: "vue2App" },
            exposes: { 
                './Counter': './UI/Counter',
                './HelloWorld': './UI/HelloWorld', 
            },
        })
    ],

    output: {
        publicPath: 'auto',
        filename: '[name].js',
        chunkFilename: '[name].[contenthash].js',
    },
}