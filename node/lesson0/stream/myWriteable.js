const { Writable } = require('stream')

class MyWritable extends Writable {
    constructor() {
        super()
    }

    _write(chunk, en, cb) {
        console.log(chunk.toString())
        process.stdout.write(chunk)

        process.nextTick(cb)
    }
}


const myWritable = new MyWritable()

myWritable.write('123132132', () => {
    console.log('done')
})