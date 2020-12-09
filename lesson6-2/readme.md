### roll up
1. esm 打包器
2. 自动开启tree-shaking
3. roll-up配置文件
  - rollup.config.js
4. 插件使用
  - commonjs， 默认不支持
  - es6 新特性转换
  - ...
  - 插件是rollup 唯一的拓展模式
    - rollup-plugin-json
    - rollup-plugin-node-resolve :针对node_modules中的文件模块
    - rollup-plugin-commonjs : commonjs module.exports
5. code splitting
  - 动态导入 import() 对用的formart amd commonjs
6. 多入口打包
  - input 设为数组 或者 对象
  - 浏览器不能直接使用amd 规则脚本， 要一个辅助的脚本，require.js 库