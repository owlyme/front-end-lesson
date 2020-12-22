class Dep {
  constructor(params) {
    this.subs = []
  }

  addSub(target) {
    this.subs.push(target)
  }

  notify() {
    this.subs.forEach(target => {
      target.update()
    })
  }
}