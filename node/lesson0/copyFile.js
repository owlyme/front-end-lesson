const fs = require("fs")

const SIZE = 10;
const buf = Buffer.alloc(SIZE)
let offset = 0;

fs.open('./1.txt', 'r', (err, rfd) => {
    if (err) {
        console.log(err)
        return;
    }
    fs.open('./2.txt', "w+", (err, wfd) => {
        // fs.read(buf, )

        function fn() {
            fs.read(rfd, buf, 0, SIZE, offset, (err, byteRead) => {

                console.log(buf.toString(), byteRead, offset);
                if (err || !byteRead) {
                    fs.close(rfd, () => {})
                    fs.close(wfd, () => {})
                    return;
                }

                fs.write(wfd, buf, 0, byteRead, () => {
                    console.log("done")
                    offset += byteRead;
                    fn()

                })
            })
        }

        fn()
    })
})