/**
 * lesson 1
exports.foo = done => {
  console.log('task foo')
  done() // 用来结束任务， 带包任务完成
}

exports.default = done => {
  console.log('task default')
  done()
}

// 4.0版本之前的形式不一样
// 现在不推荐使用
const gulp = require('gulp')
gulp.task('bar', done => {
  console.log('task 4.0 bar')
  done()
})
 */


 /**
 * lesson 2
 * 任务组合
const {series, parallel} = require('gulp')
const task1 = done => {
  console.log('task 1')
  done()
}
const task2 = done => {
  console.log('task 2')
  done()
}
exports.foo = task1
exports.s = series(task1, task2) // 串行
exports.p = parallel(task1, task2) // 并行
 */


  /**
 * lesson 3
 * 异步任务的三种方式
 * gulp 执行任务都是异步的 需要结束（done）上一个任务才能开始下一个任务
 * 中间出错将终止任务（done(err)）

exports.callback = done => {
  console.log('callback 1')
  done()
}
exports.err = done => {
  console.log('error')
  done(new Error('err'))
}

exports.promise = () => {
  console.log('promise')
  // 不需要给resolve传参数
  return Promise.resolve()
}

exports.promise_err = () => {
  console.log('promise_err')
  return Promise.reject(new Error('err'))
}

const timeout = (time) => {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

exports.async = async () => {
  console.log(1)
  await timeout(2000)
  console.log(2)
}

// 工作流方式
const fs = require('fs')

exports.stream = () => {
  let readStream = fs.createReadStream('package.json')
  let writeStream = fs.createWriteStream('temp.json')
  readStream.pipe(writeStream)
  // 当工作流的 end 事件出发时结束
  //
  console.log('not done')
  return readStream // 注意返回
}

exports.stream1 = done => {
  let readStream = fs.createReadStream('package.json')
  let writeStream = fs.createWriteStream('temp.json')
  readStream.pipe(writeStream)
  // 当工作流的 end 事件出发时结束
  console.log('not done')
  readStream.on('end', () => {
    console.log('done')
    done()
  })
}
 */

  /**
 * lesson 4
 * 任务的构建过程
 * 想清楚要做什么
 * 在找工具帮忙完成
 * 开始
 const fs = require('fs')
 const {Transform} = require('stream')
 exports.default = () => {
   // 1. 读取要处理的文件
   const read = fs.createReadStream('src/index.css')
   // 2. 处理的文件的过程 简单压缩文件
    const transform = new Transform({
      transform: (chunk, encoding, callback) => {
        const input = chunk.toString() // 将文件读取的Buffer 转换成 String
        const output = input.replace(/\s+/g, '')
                             .replace(/\/\*.+?\*\//g, '')
        callback(null, output)
      }
    })

   // 3. 指定处理之后文件的去向
   const write = fs.createWriteStream('dist/index.min.css')

   read.pipe(transform).pipe(write)

   return read

 */

/**
 * lesson 5
 * API + 插件
 */

const {src, dest} = require('gulp')
const cleanCss = require('gulp-clean-css')
const rename = require('gulp-rename')
exports.default = () => {
  return src('src/*.css').
  pipe(cleanCss()).
  pipe(rename({
    extname: '.min.css'
  })).
  pipe(dest('dist'))
}