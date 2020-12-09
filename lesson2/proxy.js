let o = {
  name: 'xy',
  age: '30'
}

let oProxy = new Proxy(o, {
  get(target, property) {
    console.log('get', target, property)
    return target[property]
  },
  set(target, property, value) {
    console.log('get', target, property, value)
    target[property] = value
  }
})


console.log(oProxy)
console.log(oProxy.age)
oProxy.name = 'xuyuan'
console.log(oProxy)
console.log(o.name)

oProxy.sex = '1'
