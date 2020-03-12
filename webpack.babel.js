const path = require('path');
module.exports = {
    entry: path.join(__dirname, "src/js/TypeJS.js"),
    output: {
        path: path.join(__dirname, "dist/js"),
        filename: "TypeJS.js"
    },
    mode: "production",
    devtool: "inline-source-map",
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }]
    }
}