function add(a,b,c) {
  return a + b + c
}

// console.log(add.length)
// console.log(add(1,2,3))

function curry(func) {
  return function curried(...arg) {
    if (func.length > arg.length) {
      return function(...argm) {
        return curried(...arg, ...argm)
      }
    } else {
      return func(...arg)
    }
  }
}

let curried = curry(add)
// console.log(curried(1,2,3))
// console.log(curried(1)(2)(3))
