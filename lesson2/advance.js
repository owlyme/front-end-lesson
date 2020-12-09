// forEach map reduce filter reudceRight

function fn(fn, arr) {
  let _arr = []
  for (let item of arr) {

  }
  return _arr;
}

function each(fn, arr) {
  for (let item of arr) {
    fn(item)
  }
}

function map(fn, arr) {
  let _arr = []
  for (let item of arr) {
    _arr.push(fn(item))
  }
  return _arr;
}

function filter(fn, arr) {
  let _arr = []
  for (let item of arr) {
    if (fn(item)) {
      _arr.push(item)
    }
  }
  return _arr;
}

function some(fn, arr) {
  let bool = false
  for (let item of arr) {
    if (fn(item)) return true
  }
  return bool
}

function every(fn, arr) {
  let bool = true
  for (let item of arr) {
    if (!fn(item)) return false
  }
  return bool
}

function reduce(fn, init, arr) {
  let acc = init
  for (let item of arr) {
   acc = fn(acc, item)
  }
  return acc;
}
function reduceRight(fn, init, arr) {
  let acc = init
  for (let i = arr.length - 1; i >= 0; i--) {
   acc = fn(acc, arr[i])
  }
  return acc;
}


let arr = [1,2,4,5]

// each((i)=> {
//   console.log(i)
// }, arr)

// console.log( map(i => i * i,arr))

// console.log( filter(i => i %2 ,arr))
// console.log( some(i => i %2, arr))
// console.log(every(i => i %2, arr))

// console.log(reduce((acc, i) => [...acc, i, i], [], arr))
console.log(reduceRight((acc, i) => [...acc, i, i], [], arr))


