function * foo() {
  console.log('111')
  try {
    let res = yield 'foo'
    console.log(res)
    console.log('222')

    let res2 = yield 'baz'
    console.log(res2)
    console.log('333')
  } catch(e) {
    console.log(e)
  }
}
let g = foo()
// console.log(g) // Object [Generator] {}
// let n = g.next() // { value: 'foo', done: false }
// console.log(n)

// let n1 = g.next('res')
// console.log(n1)

// let n2 = g.next('res2')
// console.log(n2)
// // g.throw(new Error("generator error"))

// console.log('999')

//
function promiseAjax(a) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(a)
    }, 2000)
  })
}

function * main() {
  let res1 = yield promiseAjax('res1')
  console.log(res1)

  let res2 = yield promiseAjax('res2')
  console.log(res2)

  let res3 = yield promiseAjax('res3')
  console.log(res3)

  let res4 = yield promiseAjax('res4')
  console.log(res4)
}

function co(generator) {
  let g = generator()
  let r = g.next()
  function resultHandler(r) {
    let {value, done} = r
    if (done) return
    value.then((res) => {
      console.log('co', res)
      resultHandler(g.next(res))
    })
  }

  resultHandler(r)
}

co(main)