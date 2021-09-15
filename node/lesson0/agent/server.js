const http = require("http")
const qureyString = require("querystring")

const getData = (req, res) => {
    const data = []
    req.on("data", chunk => {
        data.push(chunk)
    })

    req.on("end", () => {
        const str = Buffer.concat(data).toString()
        console.log(str)
        const cType = req.headers['content-type']
        if (cType === 'application/json') {
            const data = JSON.parse(str);
            data.name = 'xuyuan'
            res.end(JSON.stringify(data))
        } else if (cType === "application/x-www-form-urlencode") {
            const form = qureyString.parse(str)
            res.end(JSON.stringify(form))
        }



        res.end(str)
    })
}


const serve = http.createServer((req, res) => {
    console.log(req.headers)
    getData(req, res)
})

serve.listen(3000, () => {
    console.log('runnig')
})