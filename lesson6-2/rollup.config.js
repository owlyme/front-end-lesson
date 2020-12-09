import nodeResolve from "rollup-plugin-node-resolve"
export default {
    input: 'src/index.js',
    output: {
        // file: 'bundles.js',
        dir: "dist",
        formart: 'iife' // amd
    }，
    plugins: [
        nodeResolve(), // 需要的是插件的执行结果
    ]
}