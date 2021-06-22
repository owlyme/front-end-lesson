const path = require("path")
const nodeExternals = require("webpack-node-externals")

module.exports = {
    mode: "development",
    entry: "./server.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "server.js"
    },
    externalsPresets: { node: true },
    externals: [nodeExternals()]
}