## node 全局变量
1. __filename
2. __dirname
3. timer
4. process
5. require
6. module exports

## util

## process
1. 资源: CPU 内存
  - process.memoryUsage()
  - process.cpuUsage()
2. 运行环境：运行目录，node环境，cpu架构，用户环境，系统平台
  - process.cwd() // current work dir
  - process.verion | process.versions
  - process.arch
  - process.env
    - process.env.HOME
    - process.env.NODE_ENV
  - process.platform
3. 运行状态： 启动参数， pid， 运行时间
  - process.argv
  - process.pid
  - process.uptime()
4. 事件
  - process.exit()
  - process.on('exit', f => f)
  - process.on('beforeExit', f=>f)
5. 标准输入 输出 错误
  - process.stdin // 写入返回流
  - process.stout // 输出返回流
    - process.stdin.pipe(process.stdout)
6. path: 处理文件路径的api
  - path.basename(...)
  - path.dirname(...)
  - path.extnae(...)
  - path.parse() => {root, dir, base, ext, name, }
  - path.format( path.parse() )
  - path.isAbsolute
  - path.reslove
7. Buffer
  - Buffer.alloc(byte length)
  - Buffer.allocUnsave()
  - Buffer.form(string| buffer | number...)
  - buffer.indexOf()
  - buffer.toString()
  - buffer.fill()
  - buffer.write()
  - buffer.copy()
  - Buffer.concat
  - Buffer.isBuffer()
8. FS
  - 文件的权限 rwx | rwx | rwx
  - readFile
  - writeFile
  - appendFile
  - copyFile
  - watchFile(path, {interval : ms}, cbs)
  - unwatchFile
  - open read write  (flag)
  - access // 操作权限
  - accessSync
  -
  - stat
  - mkdir(path, [options], () => {}) // options=> {recursie: true}
  - mkdirSync
  - rmdir(path, [options], () => {}) // options=> {recursie: true}
  - readdir

  ## commonjs 规范
  - module
  - module.exports === exports // true
  - require
  - require.main === module // require.mian === moudle.parent
    - 入口模块 为true
    - 否则 为 false

  ## 模块加载流程
  - 路径分析
  - 文件定位
  - 编译执行

9. EventEmitter 类
  - 浏览器环境下的事件循环
    1. 自上而下执行所有的同步代码
    2. 在执行的过程中将遇到的宏任务和微任务添加到对应的任务列队中
    3. 当同步代码执行结束后，执行满足条件的微任务回调
    4. 微任务列队执行完毕后执行所有满足条件的宏任务回调
    5. 循环事件环操作
    * *每执行一个宏任务后会立即检查微任务列队

  - nodejs 中的事件循环
    1. 与浏览器环境不同的是，node中6种事件列队
    2. 微任务： promise； promise.nextTick()
        - process.nextTick 执行先于 promise.resolve().then()
    3. 宏任务：
        - timer， 事件
        - pending callbacks：执行系统操作的回调
        - idle， prepare：只在系统内部进行使用
        - poll， I/O 相关
        - check， 执行 setImmeediate
        - close callback： 执行close 回调
    4. *当宏任务列队的所有任务执行完后会才会检查微任务列队

10. stream
  - Readable, 可读流,生产供程序消费数据的流（读取文件，网络资源）
    - 暂停模式
    - 流动模式
  - Writeable， 可写流 （tcp，请求响应）
  - Duplex， 双向
  - Transform 转换流