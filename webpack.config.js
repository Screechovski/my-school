const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development';
let publicPath = '/'
let target = 'web';
let envName = process.env.NODE_ENV;

if (envName === 'production') {
    mode = 'production';
    target = 'browserslist';
}

module.exports = {
    entry: './src/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
    ],
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'build'),
        publicPath,
        clean: true,
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    cacheDirectory: true,
                    cacheCompression: false,
                    envName,
                }
            }
        },{
            test: /\.(s[ac]|c)ss$/i, // /\.(le|c)ss$/i если вы используете less
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                'sass-loader',
            ],
        }]
    },
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            "@": path.resolve(__dirname, 'src'),
        }
    },
    optimization: {
        runtimeChunk: 'single',
    },
    devtool: 'source-map',
    devServer: {
        hot: true,
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 8080
    }
}