### 剩余参数
### 箭头函数
1. this
### 对象自变量的增强
1. let obj = { [computed]: val }
2. 也被称为对象的计算属性
### Object.assign
1. 返回的是的一个参数
2. ``` javaScript
    let o = {}
    let b = {}
    let j = Object.assign(o, b)
    console.log(o === j) // true
    ```
### Object.is
1. Object.is(NaN, NaN) // true

### Proxy
1. Proxy 与 definepProperty 的区别
    - 自动
    - 可监听数组
### Reflect
1. 规范了 13 中 对象 的常用方法
### class
1. new
2. static 静态类
3. extend
    - super
### Set
1. 值不可重复
2. 常用将数组重
### Map
1. key 可以是任意类型
### Symbol
1. 在js中创建唯一的值
2. 重用做对象的唯一属性定义
3. js中有 8 种数据类型
    - Boolean
    - Number
    - String
    - null
    - Function
    - Array
    - Object
    - symbol
    - Bigint
### for 循环
1. for
2. for in =》 object
3. for of
    - 数据循环遍历的统一方式
    - break
    - Array ， 伪数组， DOM List， Set（）， Map（）
### Iterable
1. Es2015提供了 Iterable 接口
2. 数据的 Symbol.iterator 方法
3. 为 Object 是想 Iterable 接口

### 迭代器模式



### promise应用
1. 异步调用的代码都可以用promise
2. resolve，reject 创建一个为任务 // 在宏任务结尾调用
3. then/catch 返回promise对象
  error catch
### 任务
0. 每一个任务在执行过程中都可能产生微任务和宏任务
1. 每一个任务执行的最后，先执行为任务，再执行宏任务
1. 宏任务 //
3. 消息队列/事件队列 // event-loop 读取任务列队中的任务到住当前执行
2. 微任务 // 在浏览器的渲染前执行
  产生微任务的方法，promise， mutationObserve（浏览器），nextTick（node）

### promise.all 将多个promise任务合并成一个
1. 同时多接口调用
2. promise.allSettled() 不在乎每一项的promise的状态（es2020）

### generator / async / await
1.  generator 的执行过程 yield



### 毁掉函数 与 async / await主要区别
1. 有无返回值
2. 文件的书写阅读

### this
沿着作用域向上找最近的一个function， 看这个function最终怎样执行
1. 指向取决与调用不是定义
2. yan undefined
3. call apply bind

手写new call bind


### 2018
1. 拓展运算 ...
2. 正则增强 正则起名字
   1. ?<name>
   2. exec
   3. 环视
    向后断言(?!x)(?=x)
    向前断言(?<=)(?<!)
3. promise.prototype.finally // then catch

### 2019
1. array 稳定排序
2. try。。。catch 生参数


### 2020
1.
2.