// proxy

function reactive(obj) {
  return new Proxy(obj, {
      get: function(obj, prop) {
        console.log('get')
        // 默认行为是返回属性值
        return obj[prop];
      },
      set: function(obj, prop, value) {
        console.log('set')
        // 默认行为是保存属性值
        obj[prop] = value;
        // 表示成功
        return true;
      }
  })
}

function watch(fn) {


}

const state= reactive({
  a: 1,
  b: 2
})

console.log(state.a)
console.log(state.b = 4)

console.log(state)