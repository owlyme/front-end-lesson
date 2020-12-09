#!/usr/bin/env node
// Node Cli要有的固定格式
// Linux 或者 Mac 系统下要 修改 文件权限


// cli 的工作过程
// 1. 通过命令行交互询问用户问题
// 2. 更具用户输入结构生成文件

const fs = require('fs-extra')
const path = require('path')
const inquirer = require('inquirer') // 用来和用户交互
const ejs = require('ejs') // 文件模版语法
const readdirp = require('readdirp');
inquirer.prompt([
  {
    type: 'input',
    name: "name",
    message: "Project name"
  }
]).then(async (anwsers) => {
    console.log(anwsers)
  const tempDir = path.join(__dirname, 'template');
  const destDir = process.cwd()

  for await (const entry of readdirp(tempDir)) {
    const filePath = entry.path;

    ejs.renderFile(path.join(tempDir, filePath), anwsers, (err, result) => {
      if (err) throw err;

      fs.ensureFileSync(path.join(destDir, filePath))
      fs.writeFileSync(path.join(destDir, filePath), result)
    })
  }

  // fs.readdir(tempDir, (err, files) => {
  //   if(err) throw err;
  //   files.forEach(file => {
  //     ejs.renderFile(path.join(tempDir, file), anwsers, (err, result) => {
  //       if (err) throw err;
  //       fs.writeFileSync(path.join(destDir, file), result)
  //     })
  //   })
  // })


  // fs.readdir(tempDir, (err, files) => {
  //   if(err) throw err;
  //   files.forEach(file => {
  //     ejs.renderFile(path.join(tempDir, file), anwsers, (err, result) => {
  //       if (err) throw err;
  //       fs.writeFileSync(path.join(destDir, file), result)
  //     })
  //   })
  // })
})