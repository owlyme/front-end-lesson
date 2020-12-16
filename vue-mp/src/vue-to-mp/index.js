import fs from 'fs';
import path from 'path';
import jsParse from "./utils/js-parse"
import htmlParse from "./utils/html-parse"

const resolve = (filepath) => path.resolve(__dirname, filepath)

// js
let js = fs.readFileSync(resolve("./vue.js"), "utf8");
let jsCode = jsParse(js)
fs.writeFileSync(resolve('./newJsCode.js'), jsCode)

// html
let html = fs.readFileSync(resolve("./vue.html"), "utf8");
let htmlCode = JSON.stringify(htmlParse(html))
fs.writeFileSync(resolve('./newHtml.json'), htmlCode)