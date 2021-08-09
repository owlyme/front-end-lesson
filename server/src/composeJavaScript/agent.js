const http = require('http');


const get = (opts) => {
    return new Promise((resolve, reject) => {
        http.get({
            hostname: 'nodejs.cn',
            path: '/api/http.html',
            agent: false  // 仅为这个请求创建新代理
          }, (res) => {
            // 使用响应做些事情
            // console.log(res)
            resolve(res)
          });
    })
}

(async () => {
    const res = await get()
    res.on("data", console.log)
    console.log(res)
})();

const post = () => {

}


const nodeFns = {
    listener: () => {

    }
}
// module.exports = {
//     get
// }