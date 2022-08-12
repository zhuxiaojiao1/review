const { merge } = require("webpack-merge");
const common = require("./common");
const path = require("path");

module.exports = merge(common, {
    mode: "development",
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            // 允许你配置在 css-loader 之前有多少 loader 应用于 @imported 资源与 CSS 模块/ICSS 导入。
                            // 0 => no loaders (default);
                            // 1 => postcss-loader;
                            // 2 => postcss-loader, sass-loader
                            importLoaders: 1,
                            modules: {
                                // 配置生成的本地标识符
                                // [path]  源文件相对于compiler.context 或者 modules.localIdentContext 配置项的相对路径。
                                // [name]  源文件名称
                                // [ext]  文件拓展名
                                // [local]  原始类名
                                // 开发环境使用 [path][name]__[local]
                                // 生产环境使用 [hash:base64]
                                localIdentName: "[path][name]__[local]",

                                // 为本地标识符名称重新定义基本的 loader 上下文
                                // localIdentContext: path.resolve(__dirname,'src')
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
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: "[path][name]__[local]",
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
        filename: "js/[name].js",
        chunkFilename: "js/[name].js",
    },
    devtool: "eval-cheap-module-source-map",
    devServer: {
        // host: "0.0.0.0",
        port: "auto",
        open: true,
        hot: true,
        historyApiFallback: true,
        static: {
            directory: path.resolve(__dirname, "./public"),
        },
    },
});