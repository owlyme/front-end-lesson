const net = require("net");

// const serve = net.createServer()

// serve.listen(1234, 'localhost');

// serve.on('listening', () => {
//     console.log("serve listening on port 1234")
// });

// serve.on('connection', (socket) => {
//     console.log('connection')
//     socket.on('data', (chunk) => {
//         const msg = chunk.toString();
//         socket.write(Buffer.from('hello' + msg))
//     })
// })

// serve.on('close', () => {
//     console.log('serve closed')
// })

// serve.on('error', (err) => {
//     if (err.code === 'EADDRINUSE') {
//         console.log('端口被占用')
//     } else {
//         console.log(err)
//     }
// })


const server = net.createServer((c) => {
    // 'connection' 监听器。
    console.log('client connected');
    c.on('end', () => {
        console.log('client disconnected');
    });
    c.write('hello\r\n');
    c.write('hello\r\n');
    c.write('hello\r\n');
    c.pipe(c);
});
server.on('error', (err) => {
    throw err;
});
server.listen(1234, () => {
    console.log('server bound');
});