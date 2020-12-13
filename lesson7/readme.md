
### hash
1. hash模式是基于锚点， 以及onHashChange事件
    - url 中 # 后面的内容地址作为路径地址
    - 监听 hashchange 事件
    - 根据当前路由地址找到对应组件重渲染
2. history模式是基于HTML5中的history API
    - history.pushState()， history.replaceState() //
        - 改变地址栏 历史记录
        - 不发送请求
    - 监听 popstate 事件
    - 根据当前路由地址找到对应组件重渲染

### router
1. 页面组件用 props.id 代替 this.$route.params.id
2. 组件 里拿不到 this.$route 可以去拿 this.$router.currentRoute
```
vue-router
--------------------
options
data
routeMap
--------------------
constructor
install

```
### 数据驱动
1. 响应式数据
    - 数据模型内的数据发生变化，试图也会发生变化，不需要用户直接操作dom
2. 双向绑定
    - 数据改变视图改变
    - 视图改变数据也改变（表单元素）
3. 数据响应式

### vue响应式原理
1. vue2.x Object.defineProperty
2. vue3.0 Proxy

### 发布订阅模式和观察者模式


### vue 编译器
将template转换程render 函数 render生成虚拟dom

run-time 不包含 编译器
## init
init  parent root event render provide/inject initState

_patch_ 将vnode 转换成 实际dom ， $mount 将 dom 挂载到父容器

## 首次渲染过程
1. Vue初始化，实例成员以及静态
2. new Vue() 实例化
3. 调用 this._init()
4. 在 _init() 方法中定义了 vm.$mount
    1. 在runtime-with-compiler 模式下
        - 若没有  vm.options 中没有render 函数， 将 template 通过 compileTorFuncitons() 生成render函数
        - vm.options.render = render
        - 在$mount 中执行 mountComponent
    2. 在runtime 模式下
        - render方法是提供的
        - 在$mount 中执行 mountComponent
5. 在 mountComponent 方法中
    1. 触发 beforeMount hook
    2. 定义 updateComponent
        ```
        updateComponent = () => {
          vm._update(vm._render(), hydrating)
        }
        ```
        - _render 创建 vnode

        - _update 更新视图
            - 调用 vm.__patch__() 挂载真实dom
            - 记录 vm.$el
    3. 创建一个 Watcher 实例
        - 传入 updateComponent
        - 调用 get 方法
            - 调用 updateComponent


    4. 触发 mounted hook

## 数据响应式原理
### 响应式处理的过程
1. 开始 initState() -> initData -> observe()
    - observe() 中实例化 Observe， 创建响应式数据
2. observe
    -
3. class Observe
    ```
      def(value, '__ob__', this)
      if (Array.isArray(value)) {
        if (hasProto) {
          protoAugment(value, arrayMethods)
        } else {
          copyAugment(value, arrayMethods, arrayKeys)
        }
        this.observeArray(value)
      } else {
        this.walk(value)
      }
    ```
    - 数组的响应化化处理
        - 重新定义 数组数据的原型，和方法
        - 调用 observeArray, 为数组的每一项添加 创建响应式
          ```
          observeArray (items: Array<any>) {
            for (let i = 0, l = items.length; i < l; i++) {
              observe(items[i])
            }
          }
          ```
    - 对象的响应化处理
        - 调用 walk
4. defineReactive 定义响应
    - 收集依赖
    - getter
        - 收集依赖
    - setter
        - 新值式对象 调用 observe()
        - 派发更新， 调用 dep.notify()
5. 收集依赖
    - 在 watcher 对象的 get 方法中调用 pushTarget 记录 Watcher /Dep.target
    - 在**访问 data 的属性时收集依赖**
6. Watcher
    - 当数据发生改变时 会调用 dep.notify --> 调用 watcher 的update
    ```
       update () {
        /* istanbul ignore else */
        if (this.lazy) {
          this.dirty = true
        } else if (this.sync) {
          this.run()
        } else {
          //
          queueWatcher(this)
        }
      }
    ```
    -  判断 watcher 是否被处理， 若没有则将当前 watcher 添加到queueWatcher列队，并调用 flushSchedulerQueue()/刷新任务队列
    - flushSchedulerQueue() --> 触发 beforeUpdate hook
    - 调用 watcher.run() --> updateComponent
    - 晴空上一次的依赖
    - 触发 actived hook
    - 触发 updated hook

### $set / Vue.set
```
vm.set(obj, key, value)
```
1. 动态添加属性
2. 给数组添加一项调用了，vue array 的splice方法
3. 给Object添加属性，先defineReactive方法， 后 ob.dep.notify 通知

### $delete / Vue.delete
```
vm.$delete(obj, key)
```
1. 直接删除属性是不能出发试图更新
2. 数组删除一项调用了，vue array 的splice方法
3. Object删除属性，先 delete obj.key 方法， 后 ob.dep.notify 通知

### $watch
```
vm.$watch(() => {

}, {
  immdite, deep
})
```
1.
2. 顺序
    computed user render
### nextTick
1. 手动调用
2. 在 Watcher 的 queueWatcher 中执行 nextTick()
3. nextTick 的机制
  - 是异步的
  - 可能是微任务 也可能是宏任务
  - 判断优先级，promise -> Mutainobserver -> setImeta -> setTimeout
  -
### class Watcher
1. 分三种使用场景
    - Computed Watcher
    - 用户Watcher --->this.$watcher watcher 属性
    - 渲染 Watcher
2.