// excutor
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class MyPromise{
  constructor(excutor) {
    excutor(this.resolve, this.reject)
  }

  status = PENDING
  value = null
  reason = null
  successHandlers = []
  failHandlers = []

  resolve = (val) => {
    if (this.status !== PENDING) return;
    this.status = FULFILLED
    this.value = val
    while (this.successHandlers.length) {
      this.successHandlers.shift()()
    }
  }

  reject = (reason) => {
    if (this.status !== PENDING) return;
    this.status = REJECTED
    this.reason = reason
    while (this.failHandlers.length) {
      this.failHandlers.shift()()
    }
  }

  then(successHandler = f => f, failHandler = f =>f) {
    let promise = new MyPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        let res = successHandler(this.value) || this.value
        handlerPormise(res, resolve, reject)

      } else if (this.status === REJECTED) {
        failHandler(this.reason)
        reject(res || this.reason)
      } else if (this.status === PENDING) {
        this.successHandlers.push(() => {
          let res = successHandler(this.value)
          handlerPormise(res, resolve, reject)
        })

        this.failHandlers.push(() => {
          failHandler(this.reason)
          reject(this.reason)
        })
      }
    })

    return promise
  }

  catch(failHandler = f =>f) {
    return this.then(f=>f, failHandler)
  }
}

function handlerPormise(res, resolve, reject) {
  if (res instanceof MyPromise) {
    res.then(resolve, reject)
  } else {
    resolve(res || this.value)
  }
}

let another = () => new MyPromise((resolve, reject) => {
  resolve('another success')
})

new MyPromise((resolve, reject) => {
  setTimeout(() => {
  //   resolve('success')
    reject('fail')
  }, 100)
}).then((res) => {
  console.log(res)
  // return another()
})
.then((res) => {
  console.log('qqwqwqwq')
  console.log(res)
})
.catch((res) => {
  console.log('catch')
  console.log(res)
})


