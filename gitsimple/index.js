const path = require("path");
const simpleGit = require('simple-git/promise');

const gitPath = path.join(__dirname, "../", )
const git = simpleGit(gitPath, { binary: 'git' });

async function run() {
    await git.add(".")
    await git.commit("test")
    await git.status()

    await git.push("origin", "master")
}

run()