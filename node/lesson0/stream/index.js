const fs = require("fs")

const rs = fs.createReadStream("./index.js")
const ws = fs.createWriteStream("./copy.js")

// rs.pipe(ws)

// rs.pipe(process.stdout)


rs.setEncoding("utf-8");
rs.on("data", chunk => {
    ws.write(chunk)
})