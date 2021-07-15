const productRouter = require("./product")
const appRouter = require("./app")

module.exports = function (app) {
    app.use(productRouter.routes()).use(productRouter.allowedMethods());
    app.use(appRouter.routes()).use(appRouter.allowedMethods());
}