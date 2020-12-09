const path = require('path')
const fs = require('fs')
const marked  = require('marked')
const puppeteer = require('puppeteer')

function readMdFile (path) {
  // console.log(path)
  try {
    return fs.readFileSync(path, 'utf-8')
  } catch (e) {
    // console.log(e.message)
    console.log('输入正确的地址')
    return null
  }

}
function mdToHtml (mdStr) {
  // console.log(mdStr)
  return `<!doctype html>
      <html>
      <head>
        <meta charset="utf-8"/>
        <title>Marked in the browser</title>
      </head>
      <body>
        <div id="content"> ${marked(mdStr)}</div>
      </body>
      </html>`
}

async function puppeteerSrceenCut (htmlStr) {
  // console.log(htmlStr)
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.setContent(htmlStr)
  // await page.goto('https://example.com');
  await page.screenshot({path: `mdpng_${Date.now()}.png`});
  await browser.close();
}

module.exports = function(arg) {
  console.log('start')
  let argvPath = arg.path
  let filePath = path.resolve(argvPath)
  console.log(filePath)
  if (!filePath) return;
  let mdStr = readMdFile(filePath)
  let htmlStr = mdToHtml(mdStr)
  puppeteerSrceenCut(htmlStr)
}