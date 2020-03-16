const path = require('path');
module.exports = {
    entry: path.join(__dirname, "src/ts/TypeJS.ts"),
    output: {
        filename: "TypeJS.js",
        path: path.join(__dirname, "src/js/")
    },
    mode: "development",
    devtool: "inline-source-map",
    resolve: {
        extensions: [".ts"]
    },
    module: {
        rules: [{
            test: /\.ts$/,
            loader: "ts-loader"
        }, {
            enforce: "pre",
            test: /\.ts$/,
            exclude: /node_modules/,
            loader: "eslint-loader",
            options: {
                configFile: "./.eslintrc",
                fix: true
            }

        }, {
            test: /\.css$/,
            loader: [
                "style-loader",
                "css-loader"
            ]
        }]
    }
}