const buf = Buffer.from([1, 2])
    // console.log(buf, buf.toString())

const buf2 = Buffer.from(1)
console.log(buf2)

function fn() {
    console.log(this)
}


Function.prototype.myBind = function(obj) {
    this.constructor = obj

    return this
}