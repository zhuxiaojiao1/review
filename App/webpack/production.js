const { merge } = require("webpack-merge");
const common = require("./common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = merge(common, {
    mode: "production",
    module: {
        rules: [{
                test: /\.css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: "[hash:base64]",
                            },
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    ["postcss-preset-env"]
                                ],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(sa|sc)ss/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: "[hash:base64]",
                            },
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    ["postcss-preset-env"]
                                ],
                            },
                        },
                    },
                    {
                        loader: "resolve-url-loader",
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    output: {
        filename: "js/[name].[contenthash:10].js",
        chunkFilename: "js/[name].[contenthash:10].js",
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:10].css",
        }),
    ],
});