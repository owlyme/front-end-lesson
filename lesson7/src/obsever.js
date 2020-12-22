class Observe {
  constructor(data) {
    this.data = data
    this.walk(this.data)
  }
  walk(data) {
    if (typeof data !== 'object') return;
    Object.keys(data).forEach(key => {
      this.defineObserve(data, key, data[key])
    })
  }

  defineObserve(data, key, val) {
    this.walk(val)
    let dep = new Dep()
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get() {
        console.log("get");
        if (Watcher.target) dep.addSub(Watcher.target);
        Watcher.target = null;
        return val
      },
      set: (newVal) => {
        console.log('set')
        if (newVal === val) return;
        val = newVal
        dep.notify()
        this.walk(newVal)
      }
    })
  }
}