const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry: path.resolve(__dirname, "../src/index.tsx"),
    output: {
        path: path.resolve(__dirname, "../build"),
        publicPath: "/",
        clean: true,
    },
    module: {
        rules: [{
                test: /\.ico$/,
                type: "asset/resource",
                generator: {
                    filename: "/[name][hash][ext]", ////[query]
                },
            },
            {
                test: /\.(woff2?|pdf|eot|ttf|svg|opentype|otf)$/,
                type: "asset/resource",
                generator: {
                    filename: "assets/[hash][ext][query]",
                },
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                type: "asset/resource",
                generator: {
                    filename: "assets/[name][hash:10][ext]", ////[query]
                },
                // 解析选项对象
                parser: {
                    // 模块源码大小 < maxSize  ---> 模块作为一个Base64编码字符串注入包中
                    //              > maxSize  ---> 模块文件会被生成到输出的目标目录中
                    dataUrlCondition: {
                        maxSize: 10 * 1024, // 10kb
                    },
                },
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",

                    options: {
                        presets: [
                            ["@babel/preset-env"],
                            ["@babel/preset-react"]
                        ],
                    },
                }, ],
            },
            {
                test: /\.(j|t)sx?$/,
                exclude: /node_module/,
                use: [{
                        loader: "babel-loader",
                        // target: "> 0.25%",
                        options: {
                            presets: [
                                ["@babel/preset-env"],
                                ["@babel/preset-react"], // 通过preset-react 支持jsx
                                ["@babel/preset-typescript"],
                            ],
                        },
                    },
                    {
                        loader: "ts-loader",
                        options: {
                            transpileOnly: true, // 只进行语言转换，不进行类型检查
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        // 别名
        alias: {
            "~": path.resolve(__dirname, "../src/"),
            // "~": "/src",
        },
        // 引入模块时不带扩展
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        // 解析模块时应该搜索的目录 --- 先找src再找node_modules
        modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            favicon: "./public/favicon.ico",
        }),
        // 自定义编译过程中如何报告进度的方法
        new webpack.ProgressPlugin({ entries: true }),
    ],
    //   experiments: {
    //     asyncWebAssembly: true,
    //     syncWebAssembly: true,
    //   },
};