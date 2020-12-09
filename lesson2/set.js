let set = new Set()
console.log(typeof set)
let arr = [1,2,3,4,4,4]
let s = new Set(arr)
console.log(s)
// qu chong
console.log([...s])

let map = new Map()
let o = {a: 1}
console.log(typeof map)

map[o] = "object"
console.log(map)