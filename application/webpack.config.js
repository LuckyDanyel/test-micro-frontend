const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: './app/index.js',
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

    optimization: {
        minimize: false,
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'app/index.html',
        }),
        new VueLoaderPlugin(),
        new ModuleFederationPlugin({
            name: 'host',
            remotes: {
                vue2App: 'vue2App@http://localhost:5500/vue-2-components/dist/remote.js'
            }
        })
    ],

    output: {
        publicPath: 'auto',
    },
}