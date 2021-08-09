const Router = require('@koa/router');
const router = new Router();

const publicPath = "../../public";

router.get('/parse/workflow', async (ctx, next) => {
    

    console.log(234);
    ctx.body = "1";


});



module.exports = function (app) {
    app.use(router.routes()).use(router.allowedMethods());
}

