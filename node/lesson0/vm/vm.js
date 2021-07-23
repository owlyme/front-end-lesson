const vm = require("vm");
const fs = require('fs');
const path = require("path")

// vm.runInThisContext("age += 1")

function readFile(filepath) {
    const _flpath = path.resolve(__dirname, filepath)
    if (fs.existsSync(_flpath)) {
        return _flpath
    } else if (fs.existsSync(_flpath + '.js')) {
        return _flpath + '.js'
    } else if (fs.existsSync(_flpath + '.json')) {
        return _flpath + '.json'
    }
}

class Module {
    static wrapper = [
        '(function (exports, require, module, __filename, __dirname) {',
        ' })'
    ]
    static extensions = {
        '.js' (module) {
            const content = fs.readFileSync(module.id, 'utf-8')

            const complieFn = vm.runInThisContext(Module.wrapper[0] + content + Module.wrapper[1]);


            complieFn.call(module.exports, module.exports, myRequire, module, module.id, path.dirname(module.id))

        },
        '.json' (module) {
            const content = fs.readFileSync(module.id, 'utf-8')
            module.exports = JSON.parse(content)
        }
    }

    static cache = {}

    load() {
        const extname = path.extname(this.id)
        Module.extensions[extname](this)
    }


    constructor(id) {
        this.id = id;
        this.exports = null;
    }
}

function myRequire(id) {
    // 1 判断文件是否存在
    const modulePath = readFile(id)

    // 3 缓存优先
    if (Module.cache[modulePath]) {
        return Module.cache[modulePath].exports
    }

    // 2 读取文件内容
    // 4 编译
    const module = new Module(modulePath)

    Module.cache[modulePath] = module

    module.load()
        // 5 返回exprots
    return module.exports
}

const data = myRequire("./1");

console.log(data)