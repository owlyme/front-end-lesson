const path = require("path");
const simpleGit = require('simple-git/promise');

const gitPath = path.join(__dirname, "../", )
const git = simpleGit(gitPath, { binary: 'git' });

async function run() {
    let res = await git.add(".")
    console.log(res)

    res = await git.commit("test")
    console.log(res)

    res = await git.status()
    console.log(res)

    res = await git.push("origin", "master")
    console.log(res)
}

run()