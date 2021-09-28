# 调试环境


## React > 16 的架构
1. React 16版本的架构可以分为三层：
    1.  Scheduler 调度层: 调度任务的优先级，高优先级任务优先进入协调器
    2.  Reconciler 协调层：构建Fiber数据结构，对比Fiber对象找出差异，记录Fiber对象要进行的DOM操作
    3.  Renderer 渲染层：负责将发生变化的部分渲染到页面上
2.  Scheduler 调度层
    在React 15 的版本中，采用了循环加递归的方式进行了virtualDOM 的比对，由于递归使用JavaScript自身的执行栈，一旦开始无法停止，知道任务执行完成。如果 VirtualDOM 树的层级比较深，virtualDOM 的比对就会长期占用 javaScript 主线程，由于 JavaScript 是单线程的无法同时执行其他任务，所以在对比过程中无法响应用户操作，造成页面卡顿；
    在 React 16 版本中，放弃了 javaScript 递归的方式进行 VirtualDOM 的比对，而是采用（链表）循环代替递归。而且对比过程利用浏览器的空闲时间完成，不会长期占用主线程，这就解决了 VirtualDOM 比对造成的卡顿问题。
    在 window 对象中提供了 requestIdleCallback API, 它可以利用浏览器的空闲时间执行任务，打它自身也存在一些问题，比如浏览器的兼容问题，触发频率不是很稳定，所以React 最终放弃了requestIdleCallback 的使用；
    在 React 中，官方实现了自己的任务调度库，Scheduler，它可以实现在浏览器的空闲时执行任务，而且还可以设置任务的优先级
3. Reconciler 协调层
    在 React 15的版本中，协调器和渲染是交替执行的，即找到差异就直接更新差异。在 React 16的版本中，协调器和渲染层不再交替执行。协调器负责找出差异后，统一交给渲染器进行DOM的更新，也就是说协调器的主要任务就是找出差异部分，并未差异打上标记。
4. Renderer 渲染层
    在渲染层根据协调器为Fiber节点的标记，同步执行对应的DOM操作。

## 双缓存技术s
1. 为了更快速的更新 DOM，react 将最多维持两个

## 首次render
1. 构建 Fiber
2. 同步任务