const { Transform } = require('stream')

class MyTransform extends Transform {
    constructor() {
        super()
    }
    _transform(chunk, en, cb) {
        this.push(chunk.toString().toUpperCase())
        cb()
    }
}


const myTransform = new MyTransform()

myTransform.write('1adfasdfa', () => {
    console.log('done')
})

myTransform.on("data", (chunk) => {
    console.log(chunk.toString())
})