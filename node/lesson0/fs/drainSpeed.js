const fs = require('fs');

const ws = fs.createWriteStream('test.txt', {
        highWaterMark: 3
    }

)


const source = ['你', '好', '啊'];

let flag = true;
let num = 0;

function excute() {
    flag = true
    while (num < 3 && flag) {
        flag = ws.write(source[num++])
        console.log(flag)
    }
}

excute()

ws.on('drain', () => {
    console.log()
    excute()
})