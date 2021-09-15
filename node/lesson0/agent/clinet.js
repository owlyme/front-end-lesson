const http = require("http")


const getData = (res) => {
    const data = []
    res.on("data", chunk => {
        data.push(chunk)
    })

    res.on("end", () => {
        const str = Buffer.concat(data).toString()
        console.log(str)
    })
}


const options = {
    host: "localhost",
    port: "3000",
    method: 'POST',
    headers: {
        // "Content-Type": "application/json"
        "Content-Type": "application/x-www-form-urlencode"
    }
}

const req = http.request(options, (res) => {
    getData(res)
})

req.end(`a=2&b=3`)