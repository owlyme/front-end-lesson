const fs = require('fs');

const rs = fs.createReadStream('./test.txt', {
    highWaterMark: 4
})

const ws = fs.createWriteStream('./test-b.txt', {
    highWaterMark: 1
})

// let flag = true
// rs.on("data", (chunk) => {
//     console.log('data')
//     if (flag) {
//         flag = ws.write(chunk)
//     } else {
//         rs.pause()
//     }
// })

// ws.on('drain', () => {
//     console.log('drain')
//     flag = true
//     rs.resume()
// })

rs.pipe(ws)