function compose(...args) {
  return function(arg) {
   return  [...args].reduce((acc, fn) => fn(acc), arg)
  }
}

function add (num) {
  return num + 1
}
const trace = (step) => (val) => {
  console.log(step, val)
  return val
}

console.log(compose(compose(add,  trace('step1'), add), trace('step2'), add)(1))
