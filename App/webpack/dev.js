const { merge } = require("webpack-merge");
const path = require("path");
const commonConfig = require("./common");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(commonConfig, {
    mode: "development",
    devtool: "eval-cheap-module-source-map",
    devServer: {
        // host:'0.0.0.0',
        port: "auto",
        open: true,
        hot: true,
        historyApiFallback: true,
        // static:'./dist'
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                test: /\.(sc|sa)ss$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2,
                            modules: {
                                localIdentName: "[local]",
                            },
                        },
                    },
                    "postcss-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            // template:''
            template: "./public/index.html",
            title: "123_webpack",
        }),
    ],
    output: {
        filename: "[name].js",
        chunkFilename: "[name].chunk.js",
        clean: true,
    },
});