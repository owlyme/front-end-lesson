const http = require('http')
const fs = require("fs")
const path = require('path')
const mime = require("mime")
const url = require('url')


const app = http.createServer((req, res) => {
    const parse = url.parse(req.url);
    // console.log(parse)
    let file = null
    if (parse.pathname === '/') {
        file = path.resolve(__dirname, './index.html')
    } else if (parse.pathname === '/js') {
        const rs = fs.createReadStream(path.resolve(__dirname, './a.js'), { highWaterMark: 6 });
        // rs.on('data', (chunk) => {
        //     rs.pipe(res)
        // })
        rs.pipe(res)

        rs.on('end', () => {
            console.log(1232313)
            const rs2 = fs.createReadStream(path.resolve(__dirname, './b.js'), { highWaterMark: 6 });
            rs2.pipe(res)
        })

        return
    } else {
        file = path.join(__dirname, req.url)
    }

    fs.stat(file, (err, statsObj) => {
        if (err) {
            file = path.resolve(__dirname, './index.html')
            res.setHeader("Content-Type", mime.getType(file) + ";utf-8")
        }
        const rs = fs.createReadStream(file)
        rs.pipe(res)
    })

})


const listenr = app.listen(3001, () => {
    console.log('running 3000')
})