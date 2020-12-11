const babel = require("@babel/core");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const fs = require('fs');
const filename = "./demo.js";
const source = fs.readFileSync(filename, "utf8");
// https://www.jb51.net/article/173610.htm
// 1. 拿到ast
let ast = babel.parse(source);
// 2. 转化对应的值
traverse(ast, {
  enter(path) {
    // console.log(path)
    if (path.isIdentifier({ name: "a" })) {
      path.node.name = "x";
    }
  }
});
// 3. 生成新的代码
let newcode = generate(ast, {}, source)
console.log(newcode)