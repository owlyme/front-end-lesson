var babel = require("@babel/core");
const fs = require('fs')
// import { transform } from "@babel/core";
// import * as babel from "@babel/core";

const filename = "./demo.js";
const source = fs.readFileSync(filename, "utf8");

// Load and compile file normally, but skip code generation.

const { ast } = babel.transformSync(source, { filename, ast: true, code: false });
console.log(JSON.stringify(ast.program.body))

// Minify the file in a second pass and generate the output code here.
// const { code, map } = babel.transformFromAstSync(ast, source, {
//   filename,
//   presets: ["minify"],
//   babelrc: false,
//   configFile: false,
// });

