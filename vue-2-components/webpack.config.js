const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: {
        remote: './components/index.ts'
    },
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

    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new ModuleFederationPlugin({
            name: 'remote',
            exposes: ['./components/index.ts'],
        })
    ],
}