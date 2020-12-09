// 入口文件
// 用于定义一些执行任务
// 导出一个函数
// 此函数接受一个Grunt 形参， 可以调用Grunt api

module.exports = grunt => {
  /*
  grunt.registerTask('foo', () => {
    console.log("grunt foo")
  })
  grunt.registerTask('bar', () => {
    console.log("grunt bar")
  })

  // default
  grunt.registerTask('default', () => {
    console.log("grunt default")
  })
  // 多个任务
  grunt.registerTask('mulit', ['foo', 'bar'])

  // 异步任务
  // 需要用到 grunt this.async
  grunt.registerTask('async', function() {
    const done = this.async();
    setTimeout(() => {
      console.log("grunt async")
      done()
    })
  })
  */

  /*
  // 标记失败任务
  // return false
  grunt.registerTask('foo', () => {
    console.log("grunt foo")
  })
  grunt.registerTask('bar', () => {
    console.log("grunt bar")
  })
  grunt.registerTask('err', () => {
    console.log("grunt err")
    return false
  })

  // 异步错误
  grunt.registerTask('async-err', function() {
    const done = this.async();
    setTimeout(() => {
      console.log("grunt async-err")
      // 传入false
      done(false)
    })
  })

  // 多个任务
  // 遇到错误后，任务终止
  // yarn grunt --force 可以继续下一个任务

  grunt.registerTask('default', ['foo','async-err', 'bar'])
  */

  /*
  // lesson 3
  // 配置选项
  // 变量 环境变量之类的
  grunt.initConfig({
    foo: "123"
  })

  grunt.registerTask('default', () => {
    console.log(grunt.config('foo'))
  })
  *
  */

  // 多目标任务

  // grunt 插件

  // grunt 退出了历史
}