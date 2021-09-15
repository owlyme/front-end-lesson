const { Readable } = require('stream')

class MyReadable extends Readable {
    constructor(source) {
        super()
        this.source = source
    }

    _read() {
        const data = this.source.shift() || null;
        this.push(data)
    }
}


const source = ['123', '456', '789']

const myReadable = new MyReadable(source)

// read 暂停模式
// myReadable.on('readable', () => {
//     let data = null
//     while ((data = myReadable.read(3)) !== null) {
//         console.log(data.toString())
//     }
// })

// data 流动模式
myReadable.on('data', chunk => {
    console.log(chunk.toString())
})