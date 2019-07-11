const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");

// TODO: refactor how plugins are loaded or create
// a brand new config for production
const plugins = [
    new MiniCssExtractPlugin({
        filename: "style.css",
    }),
]
if (process.env.NODE_ENV === "production") {
    plugins.push(new MinifyPlugin());
}

module.exports = [
    // Config for regular blocks
    {
        entry: "./assets/src/index.js",
        output: {
            path: path.resolve(__dirname, "./assets/dist"),
            filename: "build.js"
        },
        plugins,
        module: {
            rules: [{
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                },
                {
                    test: /\.view.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader", // translates CSS into CommonJS
                        "sass-loader" // compiles Sass to CSS, using Node Sass by default
                    ]
                },
                {
                    test: /\.editor.scss$/,
                    use: [
                        "style-loader",
                        "css-loader",
                        "sass-loader"
                    ]
                }
            ]
        },
        stats: {
            colors: true
        },
        externals: {
            react: "React"
        }
    },
    // Config for view scripts
    {
        entry: './assets/src/index.view.js',
        output: {
            path: path.resolve(__dirname, "assets/dist"),
            filename: "build.view.js"
        },
        module: {
            rules: [{
                test: /.js$/,
                loader: "babel-loader"
            }]
        },
        stats: {
            colors: true
        },
        externals: {
            react: "React",
            'react-dom': 'ReactDOM'
        }
    }
];