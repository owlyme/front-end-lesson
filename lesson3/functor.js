// functor MayBe Etheir left right

class Functor {
  static of (val) {
    return new Functor(val)
  }
  constructor(val) {
    this._value = val
  }
  map(fn) {
    return new Functor(fn(this._value))
  }
}

// let res = Functor.of('xy')
//                   .map(val => {
//                     console.log(val)
//                     return val + val
//                   })
//                   .map(val => {
//                     console.log(val)
//                     return 'end'
//                   })
// console.log(res)
///////////////////////////////

class MayBe {
  static of (val) {
    return new MayBe(val)
  }
  constructor (val) {
    this._value = val
  }
  map (fn) {
    if (this._value === null || this._value === undefined) {
      return new MayBe(this._value)
    }
    return new MayBe(fn(this._value))
  }
}


// let res = MayBe.of(null)
//                   .map(val => {
//                     return val.toUpperCase()
//                   })
//                   .map(val => {
//                     console.lot(val)
//                     return val
//                   })
//                   .map(val => {
//                     return 'end' + val
//                   })

//                   console.log(res)


///////////////////////////////

class Left {
  static of (val) {
    return new Left(val)
  }
  constructor(val) {
    this._value = val
  }
  map() {
    return this
  }
}

class Right {
  static of (val) {
    return new Right(val)
  }
  constructor(val) {
    this._value = val
  }
  map(fn) {
    return new Right(fn(this._value))
  }
}
function either(val) {
  try {
    return Right.of(val).map(val => {
      console.log(1, val)
      return val.toUpperCase()
    })
    .map(val => {
      console.log(2, val)
      return val
    })
    .map(val => {
      console.log(3, val)
      return 'end' + val
    })
  } catch (err) {
    return Left.of({
      error: err.message
    })
  }
}

let res = either(null)

console.log(res)
///////////////////////////////
class IO {
  static of (val) {
    return new IO(() => val)
  }
  constructor(fn) {
    this._value = fn
  }
  map (fn) {
    return new IO(() => fn(this._value()))
  }
  run () {
    return this._value()
  }
}
// let res = IO.of('xy')
//             .map(val => {
//               console.log(1, val)
//               return val.toUpperCase()
//             })
//             .map(val => {
//               console.log(2, val)
//               return val
//             })
//             .map(val => {
//               console.log(3, val)
//               return 'end' + val
//             })
//             .run()
// console.log(res)