const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
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
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.vue'],
    },
    experiments: {
        topLevelAwait: true,
    },
    optimization: {
        minimize: false,
      },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new ModuleFederationPlugin({
            name: 'vue2App',
            filename: 'remote.js',
            library: { type: "var", name: "vue2App" },
            exposes: {
                './vue2': './node_modules/vue/dist/vue',
                './UI': './UI/index.js',
            }
        })
    ],
    output: {
        filename: '[name].js',
        chunkFilename: '[name].[contenthash].js' ,
        publicPath: 'auto',
    },
}