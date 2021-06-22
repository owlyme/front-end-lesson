const path = require("path")
const nodeExternals = require("webpack-node-externals")

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        // library: {
        //     name: 'MyLibrary',
        //     type: 'umd'
        // }
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }]
    }
}