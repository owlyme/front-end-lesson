const workflow = require('./workflow')
const compose = require('./composeJavaScript')
const upload = require('./upload')
const parseWork = require('./parseWork')

module.exports = function(app) {
    workflow(app);
    compose(app);
    upload(app);
    parseWork(app)
}