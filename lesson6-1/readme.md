## 模块化开发
1. 历史遗留问题
2. commomjs node 同步加载模块
3. AMD 浏览端使用
4. sea.js CMD 浏览端使用

## 模块化标准规范
1. commomJS
    - node
    - 毫无问题
2. ES Modules // ES6
    - import export

## ES Modules 基本特性
1. 通过给 script 标签设置 type= module 属性
    - 自动采用严格模式 use strict
    - script type="module" 都有独立的作用域
    - esm 是通过 CORS 去请求外部js模块
    - ESM 的 script 标签会延迟执行脚本
2. 导出和导入
    - export import 是语法结构不是抛出和引入对象
    - export default
    - export {}

## webpack
0. 默认入口为 src/index.js 文件
    - 可以通过 webpack.config.js 配置
    - 可以抛出一个对象
    - 可以抛出一数组对象（同时多个配置，打包）
    - webpack --config webpack.config.js

1. 将所有类型的文件视为模块
    - 通过不同的loader处理不同的文件, webpack 和核心机制
        - loader 一种管道式，合作工作流
        - loader 的最终返回结果必须是一个js
        - 打包文件
    - plugins
        - 自动化工作
        - 往 webpack 生命周期的钩子函数内添加任务
        - clean-webpack-plugin
        - html-webapck-plugin
            - 多页面 多实例
        - copy-webpack-plugin
2. 提高开发体验
    - webpack-dev-server
        - 使用时要注意 output publicpath 路径
    - 代理服务
    - 自动刷新
        - 不丢失数据，保持原状态
        - hmr / hot-module-replace
        - css文件 经过loader 处理
        - js 模块会导致浏览刷新
            - 因为没有模块处理业务是不固定的， vue-cli / react-create-app ， 它们将的没模块都有针对处理
            - 因此我们要针对自己js做处理
                - 正常应用模块
                - 调用 module api
                    ```
                        import hmr from "./hmr"
                        *****
                        module.hot.accept('./hmr.js', (e) => {
                        // "这里需要手动处理热替换逻辑"
                        console.log("这里需要手动处理热替换逻辑")
                        console.log(e)
                        elH2.innerHTML = hmr
                        })

                    ```
            - 正对图片的热加载
                ```
                    import hmr from "./hmr"
                    *****
                    module.hot.accept('./hmr.js', (e) => {
                        Image.src = newPath
                    })

                ```
            - hmr 注意事项
                1. hot： 当出错时会刷新
                2. hotOnly ： true 当出错时不会刷新
                3. 兼容 hot 当hmr 没有打开时 module.hot 是不存在的， 使用是要做判断 if（module.hot） {...}
                4. 无关代码的影响， 不影响生产环境

3. source map
    - devtool
        - none （不生成source-map，production）
        - eval ：不生成source-map
        - eval-source-map （有行列信息）
        - cheap-eval-soucre-map （阉割版的）
        - cheap-module-eval-source-map （loader 没有处理）
        - source-map
        - inline-source-map (不常用)
        - hidden-source-map
        - nosources-source-map (生产环境用，不暴露源码，可以提示报错位置)
    - 选择模式
        - cheap-module-eval-source-map / dev
        - none / production

4. 生产环境优化打包
    - mode ： 内置了不同的打包模式
    - 配置
        - 简单配置
        - 配置文件
    - DefinePlugin
        - 为代码注入全局变量： process.env.***
            ```new webpack.DefinePlugin({
                API_BASE: '"api-base-url"'
                })
            ```
    - Tree-shaking
        - dead-code : 为引用代码
        - production 自动开启
        - {
            optimization: {
                usedExports: true,
                concatenateModules： true，
                minimize: true，
                sideEffects: true
            }
        }
        - concatenateModules 合并模块 ScopeHoisting
        - 与 babel-loader 结合使用
            tree-shaking 对esm 模块的组件代码有作用， 对commonjs模块不适用，
            可以配置 babel-loader 的 perset 不对风格进行转变
        - sideEffects
            - 会将没有副作用的代码删除，但同时也可能删除一些有副作用的代码
            - 可以在package.json中 添加 配置 sideEffects，来标示哪些代码有副作用
            ```
            "sideEffects": false
            "sideEffects": [文件路径， **/*.css]
            ```
    - code-splitting 代码分割/分包
        - 包大
        - 分包， 按需加载
        - 方案
            - 多入口 ： 04-webpack
                - 注意分包的入口文件
                - 包文件的名称
                - 模版html的引用
                - 公共代码的提取
            - 动态打包: 05-webpack
                ```javascript
                import(/* webpackChunkName: "bpage" */'filepath').then((module) => {
                    console.log(moudle.default)
                })
                ```
    - hash 的注意
        - [hash]
        - [chunkhash]
        - [contenthash]

## jsDoc 是什么
1. @type






