const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "../src/index.tsx"),
    output: {
        path: path.resolve(__dirname, "../build"),
        publicPath: "/",
        // filename: "[name].bundle.js",
    },
    module: {
        rules: [{
                test: /\.(png|jpg|jpeg|gif)$/,
                type: "asset/resource",
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",

                    // options: {
                    //   presets: ["@babel/preset-env"],
                    // },
                }, ],
            },
            {
                test: /\.(j|t)sx?$/,
                exclude: /node_modules/,
                use: [{
                        loader: "babel-loader",
                        // options: {
                        //   presets: ["@babel/preset-env", "@babel/preset-react"],
                        // },
                    },
                    {
                        loader: "ts-loader",
                        options: {
                            transpileOnly: true, // 只做语言转换，不做类型转换
                        },
                    },
                ],
            },
        ],
    },

    resolve: {
        alias: {
            // "~": "/src",
            "~": path.resolve(__dirname, "../src/"),
        },
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        // modules: [path.resolve(__dirname, "/src"), "node_modules"],
    },
};