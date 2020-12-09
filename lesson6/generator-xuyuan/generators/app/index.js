// Generator 入口文件
// 需要导出一个Generator
// Genertor有自己的生命 hook函数
// 我们在这些hook中利用父类提供的方法处理业务
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
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
  writing() {
    // this.fs.write(this.destinationPath('hello.txt'), 'hello world')
    // const templ = this.templatePath('vue.html')
    // const output = this.destinationPath('_index.html')
    // const context = {title: 'xy 666', body: 'oh yeah'}
    // this.fs.copyTpl(templ, output, context)

    const templ = this.templatePath('vue.html')
    const output = this.destinationPath('_index.html')
    const context = {title: this.answers.title, body: 'oh yeah'}
    this.fs.copyTpl(templ, output, context)

  }
}
