Function.prototype.xy = function() {
  console.log(this)
}
// fn.xy()

Function.prototype.myCall = function(obj, arg) {
  obj.fn = this
  let res = obj.fn(arg)
  delete obj.fn
  return res
}

const fn = function () {
  console.log(this, arguments)
  return this
}

fn.myCall({a: 1}, 123)

Function.prototype.myBind = function(obj) {
  obj.fn = this
  return function() {
    return obj.fn(Array.from(arguments))
  }
}

// fn.myBind({a: 'this'})('arg')


