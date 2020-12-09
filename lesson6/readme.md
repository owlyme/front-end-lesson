### 前端工程化
1. why
    1. 通过工程化提高开发效率
    2. es6新特性的兼容问题
    3. 样式的预编译语言
    4. 模块化开发的可维护性
    5. 减少重复性操作
    6. 统一代码风格、质量保证
    7. 依赖后端服务接口的支持
2. 工程化不等于某个工具
    1. 对项目的整体规划和架构
    2. 项目开发的工作流程
3. 工程化与node

### 项目创建环节
  1. 脚手架的作用
    1. 创建基础结构
    2. 提供项目的规范和约定
  2. 常见的脚手架工具
    - create-react-app
    - vue-cli
    - ....
    - yeoman
    - plop (在项目开发过程中)
  3. 通用脚手架工具解析
    - yeoman
  4. 开发一款脚手架


## yeoman
1. npm install -g yo || yarn global add yo
2. yarn global add generator-node
    - generator-node 生成npm package
3. yo node

4. 基本使用
  1. generator-node
  2. sub-generator // 项目内使用
  3. yarn link // 这册模块到全局范围
  4. chmod 777 /usr/local/bin/my-yo-test

5. 常规使用步骤

6. 自定义Generator
  1. 创建Generator 模块 就是创建一个npm
  2. 基本结构（截图）
      - generators-xuyuan 文件夹
        - app 文件夹

      - 1. yarn link // 这册模块到全局范围
      - 2. yo xuyuan 调用
  3. 命名
  4. 创建文件
      - 单一文件
      - 模板创建工具 (ejs 语法)
      - 接受用户输入
        ```
        prompting() {
          return this.prompt([
            {
              type: 'input',
              name: 'title',
              message: 'qing shu rui title',
              default: this.appname
            }
          ]).then(res => {
            this.answers = res
            console.log(res)
          })
        }
        ```
7. vue 脚手架
  - 同时创建多文件
  - 文件本身含有ejs语法的冲突
      - <%%=
8. 发布Generator
  - 建立github 仓库
  - npm publish / yarn publish
  - 淘宝镜像配置只读不能些
  - 提交时重新配置镜像地址
    - yarn publish --registry=https://yarnpkg.com

## Plop
1. 创建项目中的文件
2. 项目中集成Plop工具
    - cnpm install plop -D
    - 创建 plopfile.js
    - yarn plop <generator-nme>

## 脚手架工作原理
1. 工作的目的
2. 创建一个cli
    - yarn init 一个项目
    - 在package.json中添加 bin 属性用来指定cli的入口文件
      - 还可以设置 {a: '', b: ''} 等多命令
    - cli.js 有固定的头部
    - 案例 lesson6 xuyuan-cli
    - commander 模块


## 自动化构建体验
1. 案例 lesson6 auto
    - sass 转化成 scss
    - install sass
    - 执行sass脚本
        -  /node_modules/.bin/sass、
    - NPM scripts
2. browser-sync 模块
    - 用于启动服务器
3. 常用的自动化构架工具
    - Grunt
        - 案例 grunt
    - Gulp
        - 案例 gulp
    - FIS （百度）

## metalsmith
