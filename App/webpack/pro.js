const { merge } = require("webpack-merge");
const path = require("path");
const commonConfig = require("./common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(commonConfig, {
    mode: "production",
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: "[local]",
                            },
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                config: path.resolve(__dirname, "../postcss.config.js"),
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(sc|sa)ss$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../",
                        },
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2,
                            modules: {
                                localIdentName: "[local]",
                            },
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                config: path.resolve(__dirname, "../postcss.config.js"),
                            },
                        },
                    },
                    { loader: "resolve-url-loader" },
                    {
                        loader: "sass-loader", // 将 Sass 编译成 CSS
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            title: "123_webpack",
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
        }),
    ],
    output: {
        filename: "js/[name].[contenthash].js",
        chunkFilename: "js/[name].[contenthash].js",
    },
});