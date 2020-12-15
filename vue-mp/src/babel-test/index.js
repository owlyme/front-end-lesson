import { parse } from "@babel/core";
import traverse from "@babel/traverse";
import generate from "@babel/generator";
import * as t from "@babel/types";
import fs from 'fs';
import path from 'path';
import visitor from "./visitor"


const resolve = (filepath) => path.resolve(__dirname, filepath)
const filename = "./vue.js";

let source = fs.readFileSync(resolve(filename), "utf8");
// https://blog.csdn.net/w993263495/article/details/84985788
// https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md
// 1. 拿到ast
source = `
var a = 1; 
aaa === bbb;
function fn (n) {
  return n * n
}
`

let ast = parse(source, {
  sourceType: "module",
  // plugins: [
  //   [resolve('./plugin.js'), { types: t }]
  // ]
});

fs.writeFileSync(resolve('./ast.json'), JSON.stringify(ast.program.body, null, 2))
  // 2. 转化对应的值
  // const MyVisitor = {
  //   Identifier(path) {
  //     console.log("**************", path, '\n')
  //     console.log("Visiting: " + path.node.name);
  //   }
  // };

traverse(ast, visitor({ types: t }));


// 3. 生成新的代码
let newcode = generate(ast, {}, source);

fs.writeFileSync(resolve('./newCode.js'), newcode.code);
// console.log(newcode)