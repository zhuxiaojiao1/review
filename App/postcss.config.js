module.exports = () => ({
    plugins: [
        ["postcss-preset-env", { browsers: ">0.1%" }]
    ],
    // postcss-preset-env:  将现代 CSS 转换为大多数浏览器可以理解的内容
});