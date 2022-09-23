const path = require('path');

module.exports = {
    target: 'node',
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        path: path.resolve(__dirname, '../public'),
        filename: 'server.js'
    },
    watch: true,
    stats: {
        errorDetails: true
    }
};
