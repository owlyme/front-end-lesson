const { Duplex } = require('stream')

class MyDuplex extends Duplex {
    constructor(source) {
        super()
        this.source = source
    }
    _read() {
        const data = this.source.shift() || null
        this.push(data)
    }

    _write(chunk, en, cb) {
        console.log(chunk.toString())
        process.stdout.write(chunk)

        process.nextTick(cb)
    }
}
const source = ['123', '34566s']

const myDuplex = new MyDuplex(source)
myDuplex.on("data", (chunk) => {
    console.log(chunk.toString())
})

myDuplex.write('123132132', () => {
    console.log('done')
})