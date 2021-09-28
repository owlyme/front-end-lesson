const path = require("path")
const fs = require("fs")
const Router = require('@koa/router');
const router = new Router();

const publicPath = "../../public";

router.get('/compose/js', async (ctx, next) => {
    const composeJs = (ctx.query.js || '')
    .split(";")
    .reduce(
        (acc, js) => acc.concat(fs.readFileSync(path.resolve(__dirname, publicPath, js),"utf-8")), 
        []
    );

    ctx.body = composeJs.join(";")
});

module.exports = function (app) {
    app.use(router.routes()).use(router.allowedMethods());
}

