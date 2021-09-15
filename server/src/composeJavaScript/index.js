const path = require("path")
const fs = require("fs")
const Router = require('@koa/router');
const router = new Router();

const publicPath = "../../public";

router.get('compose/js', async(ctx, next) => {
    // const composeJs = (ctx.query.js || '')
    // .split(";")
    // .reduce(
    //     (acc, js) => acc.concat(fs.readFileSync(path.resolve(__dirname, publicPath, js),"utf-8")),
    //     []
    // );

    // ctx.body = composeJs.join(";")
    const rs = fs.createReadStream(path.resolve(__dirname, './c.js'));
    // ctx.body = rs;

    await next();
    rs.pipe(ctx.res)
        // const rs2 = fs.createReadStream(path.resolve(__dirname, './d.js'));
        // // ctx.body = rs2;
        // rs2.pipe(ctx.res)
        // ctx.body = null
        // const rs = fs.createReadStream(path.resolve(__dirname, './index.js'));
        // rs2.pipe(ctx.res);
        // rs.pipe(ctx.res)



});

module.exports = function(app) {
    app.use(router.routes()).use(router.allowedMethods());
}