class Dep {
    constructor() {
        this.sub = []
    }

    addSub(watcher) {
        if (watcher.update) {
            this.sub.push(watcher)
        }
    }

    notify() {
        this.sub.forEach(watch => {
            watch.update()
        })
    }
}

class Watcher {
    constructor() {

    }
    update() {
        console.log('update')
    }
}