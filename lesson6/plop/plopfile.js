module.exports = plop => {
  plop.setGenerator('component', {
    description: "创建 component",
    // 交互提示
    prompts: [
      {
        type: 'input', // 方式
        name: 'name', // 对应字段
        message: 'component name',
        default: 'test'
      }
      // ...
    ],
    actions: [
      {
        type: 'add', // 添加文件
        path: 'src/components/{{name}}/{{name}}.html',
        templateFile: 'plop-template/component.hbs' // 模版文件 使用 Handlebars 语法
                                                    // 通常在项目的根目录
      },
      // ... 多文件模版
    ]
  })
}