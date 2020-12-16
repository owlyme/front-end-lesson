import { parse } from "@babel/core";
import traverse from "@babel/traverse";
import generate from "@babel/generator";
import * as t from "@babel/types";
import fs from 'fs';
import path from 'path';
import visitor from "./visitor"
const resolve = (filepath) => path.resolve(__dirname, filepath)
  // https://www.jb51.net/article/173610.htm
  // https://astexplorer.net/

export default (source, createAstFile = false) => {
  // 1. 拿到ast
  let ast = parse(source, {
    sourceType: "module",
  });

  if (createAstFile) {
    fs.writeFileSync(resolve('./ast.json'), JSON.stringify(ast, null, 2));
  }
  // 2. 转化对应的值
  traverse(ast, visitor({ types: t }));

  // 3. 生成新的代码
  let newcode = generate(ast, {}, source)
  return newcode.code
}