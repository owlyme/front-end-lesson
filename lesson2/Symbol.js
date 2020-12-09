// console.log(typeof Symbol) // funciton

let s = Symbol()
// console.log(typeof s) // function

let o = {}
o[Symbol()] = 'symbol key'


console.log(o)
console.log(Object.keys(o))

for (let key in o) {
  console.log(key)
}


console.log(Object.getOwnPropertySymbols(o))