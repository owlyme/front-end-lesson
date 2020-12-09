
let testPromise = bool => {
	new Promise((resolve, reject) => {
		if (bool) {
        	resolve('bool is true')
        } else {
        	reject('bool is false')
        }
    }).then(
    resolveResult => {
        // 成功时执行此方法
        console.log('resolveResult', resolveResult)
    },
    rejectResult => {
        // 拒绝或者说失败的状态下执行此方法
        console.log('rejectResult', rejectResult)
    })
}
testPromise(true) // console输出  'resolveResult', bool is true

testPromise(false) // console输出 'resolveResult', bool is false

// 1、 定义class
class MyPromise{
  constructor(excutor) {
    // excutor为实例化是传入的方法
    // 拿到 excutor 下一步 做什么？？？？？？？？
    // 执行 excutor 并传入两个参数
    excutor(this.resolve, this.reject)
  }

  resolveValue = undefined
  rejectValue = undefined

  status = PENDING

  resolve = (val) => {
  	// 用resolveValue 保存 resolve方法的参数
     this.resolveValue = val
    // 改变 MyPromise 的 状态
     this.status = FULFILLED
  }

  reject = (val) => {
    // 用rejectValue 保存 reject方法的参数
  	this.rejectValue = val
    // 改变 MyPromise 的 状态
    this.status = REJECTED
  }

	// 该方法接受 两个参数且都是 functio
	// 这里命名为 successHandler, rejectHandler
  then(successHandler, rejectHandler) {
  	// 这两个方法都有默认的参数，这两参数是resolve 和 reject 调用时接受的参数
   	// 这两个方法不会同时执行 ---> 因此我们需要一个状态做判断
    if (this.status === FULFILLED) {
    	successHandler(this.resolveValue)
    } else if (this.status === REJECTED) {
    	rejectHandler(this.rejectValue)
    } else {
    	// 处理其他业务
    }
  }
}

// 2. 定义Promise的三种状态
const PENDING = 'PENDING'; // pending就是未决，
const FULFILLED = 'FULFILLED'; // resolve可以理解为成功，
const REJECTED = 'REJECTED'; // reject可以理解为拒绝。

// 3. 执行一下
let testMyPromise = bool => {
	new MyPromise((resolve, reject) => {
		if (bool) {
        	resolve('bool is true')
        } else {
        	reject('bool is false')
        }
    }).then(
    resolveResult => {
        // 成功时执行此方法
        console.log('resolveResult', resolveResult)
    },
    rejectResult => {
        // 拒绝或者说失败的状态下执行此方法
        console.log('rejectResult', rejectResult)
    })
}

testMyPromise(true) // console输出  'resolveResult', bool is true
testMyPromise(false) // console输出 'resolveResult', bool is false
