const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: {
        'zuck.js': './src/zuck.js',
        'zuck': './src/zuck.css'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', 'css']
    },
    plugins: [
        new MiniCssExtractPlugin({})
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: '[name]',
        library: 'Zuck',
    },
    optimization: {
        minimize: process.env.NODE_ENV === 'production'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        host: '127.0.0.1',
        port: 8081
    }
};