var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");
var path = require('path');

var isProduction = process.env.NODE_ENV === 'production'; // true or false
var cssDev = ['style-loader', 'css-loader', 'sass-loader'];
var cssProd = ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader'],
                publicPath: "/build"
            });
var cssConfig = isProduction ? cssProd : cssDev;

module.exports = {
    entry : "./src/app.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "app.bundle.js",
        publicPath: '/'
    },
    module: {
        rules: [
            { 
                test: /\.scss/, 
                use: cssConfig 
            },
            { 
                test: /\.js$/, 
                exclude: /node_modules/, use: "babel-loader" 
            }, 
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: 'file-loader?name=[name]-[hash].[ext]&outputPath=/images/'
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 3000,
        hot: true,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Hackernews client using React",
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            template: "./src/index.html"
        }),
        new ExtractTextPlugin({
            filename: "app.css",
            allChunks: true,
            disable: !isProduction
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
}