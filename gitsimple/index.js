const path = require("path");
const simpleGit = require('simple-git/promise');

const gitPath = path.join(__dirname, "../", )
const git = simpleGit(gitPath, { binary: 'git' });

async function run() {

    let res = await git.add(".")
    console.log(1, res)

    res = await git.commit("test")
    console.log(2, res)

    res = await git.status()
    console.log(3, res)

    res = await git.push("origin", "master")
    console.log(4, res)
}

run()