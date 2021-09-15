const http = require('http');
const Koa = require('koa');
const fs = require('fs');
const url = require('url');

const middlewares = require("./middleware")
const routers = require('./src')

const app = new Koa();
const port = 3000;

middlewares(app);
routers(app);

app.use((ctx) => {
    if (ctx.status == 404) {
        ctx.body = "<h1>404</h1>"
    }
});


const serve = http.createServer(app.callback(), (req, res) => {
    const parse = url.parse(req.url);
    console.log(parse)
    if (parse.pathname === '/compose/js') {
        const rs = fs.createReadStream('./a.js');
        rs.pipe(res)
        const rs2 = fs.createReadStream('./b.js');
        rs2.pipe(res);
        return
    }
})

serve.listen(port, () => {
    console.log(`server is running: localhost:${port}`)
});