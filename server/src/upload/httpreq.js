const http = require('http')
const fs = require('fs')
const path = require("path")
// http.get({
//     hostname: 'localhost',
//     port: 3000,
//     path: '/upload',
//     agent: false  // 仅为这个请求创建新代理
//   }, (res) => {
//     res.on('data', (data) => {
//         console.log(data)
//     });
//   });


const boundaryKey = '----WebKitFormBoundary' + new Date().getTime();

const postData = JSON.stringify({
    'name': 'Hello World!'
});
const req = http.request({
    host: '127.0.0.1',
    port: 3000,
    method: 'POST',
    path: '/upload',
    headers: {
        'Content-Type': 'multipart/form-data; boundary=' + boundaryKey
    },
    
}, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data in response.');
    });
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

// 将数据写入请求正文
// req.write(postData);
// req.end();

req.write(
    '--' + boundaryKey + '\r\n' +
    'Content-Disposition: form-data; name="file"; filename=123.js\r\n' +
    'Content-Type:application/x-javascript\r\n\r\n'
);

var fileStream = fs.createReadStream(path.resolve(__dirname, './abc.js'), { bufferSize: 1024 * 1024 * 50 });
fileStream.pipe(req, { end: false });
fileStream.on('end', function () {
    req.end('\r\n--' + boundaryKey + '--');
});