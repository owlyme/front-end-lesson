// const process = require('child_process');

// process.exec("git remote -v ", function (error, stdout, stderr) {
//     if (error !== null) {
//       console.log('exec error: ' + error);
//     }
//     console.log('start', typeof stdout, stdout.includes('git@github.com:owlyme/front-end-lesson.git'))
//     console.log(stdout)
// })

const shell = require('shelljs');
let res = shell.echo('hello');
res = shell.ls();
res = shell.exec('git remote -v');

console.log(res.stdout)

