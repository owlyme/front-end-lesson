## node 全局变量
1. __filename
2. __dirname
3. timer
4. process
5. require
6. module exports

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