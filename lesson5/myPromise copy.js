// excutor
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

function resolvePromise(thenReturnPromise, res, resolve, reject) {
  if(thenReturnPromise === res) {
    return reject(new TypeError('then不能return自身'))
  }
  if (res instanceof MyPromise) {
    res.then(resolve, reject)
  } else {
    resolve(res)
  }
}

class MyPromise  {
  constructor(excutor) {
    try {
      excutor(this.resolve, this.reject)
    } catch (e) {
      this.reject(e)
    }
  }
  status = PENDING
  value = undefined
  reason = undefined
  resolveCallback = []
  rejectCallback = []

  resolve = (val) => {
    if (this.status !== PENDING) return
    this.status = FULFILLED
    this.value = val

    // this.resolveCallback && this.resolveCallback(this.value)
    while (this.resolveCallback.length) {
      this.resolveCallback.shift()(this.value)
    }

  }
  reject = (reason) => {
    if (this.status !== PENDING) return
    this.status = REJECTED
    this.reason = reason

    // this.rejectCallback && this.rejectCallback(this.reason)
    while (this.rejectCallback.length) {
      this.rejectCallback.shift()(this.reason)
    }
  }

  then(resolveCallback = f=> f, rejectCallback = f=>f) {
    let thenReturnPromise = new MyPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            let res = resolveCallback(this.value) || this.value
            resolvePromise(thenReturnPromise, res, resolve, reject)
          } catch (e) {
            reject(e)
          }
        },0)
      } else if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let res = rejectCallback(this.reason) || this.reason
            resolvePromise(thenReturnPromise, res, resolve, reject)
          } catch (e) {
            reject(e)
          }
        },0)
      } else {
        // 处理异步
        setTimeout(() => {
          try {
            this.resolveCallback.push(() => {
              let res = resolveCallback(this.value)  || this.value
              resolvePromise(thenReturnPromise, res, resolve, reject)
            })
            this.rejectCallback.push(() => {
              let res = rejectCallback(this.reason)  || this.reason
              // resolvePromise(thenReturnPromise, res, resolve, reject)
              reject(res)
            })
          } catch (e) {
            reject(e)
          }
        },0)
      }
    })

    return thenReturnPromise;
  }

  catch(rejectCallback = f=>f) {
    return this.then(() => this.value, rejectCallback)
  }

  static all(arr) {

  }
  static race(arr) {
    return new MyPromise((resolve, reject) => {
      for (let i = 0; i<=arr.length; i ++) {
        let item = arr[i]
        if (item instanceof MyPromise){
          item.then(resolve, reject)
        } else {
          resolve(item)
        }
      }
    })
  }
  static resolve() {
    return new MyPromise(res => {
      res()
    })
  }
}

MyPromise.race([
  fn(200),
  fn(400)
]).then(res => {
  console.log('result', res)
})


function fn (delay) {
  return new MyPromise((res) => {
    setTimeout(() => {
      console.log("delay", delay)
      res(delay)
    }, delay)
  })
}



