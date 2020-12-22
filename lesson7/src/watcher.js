class Watcher {
  constructor(cb) {
    Watcher.target = this
    this.cb = cb
  }

  update() {
    this.cb();
  }

}