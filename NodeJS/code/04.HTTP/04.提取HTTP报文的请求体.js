// 1. 导入HTTP模块
const http = require('http');

// 2. 创建服务对象
const server = http.createServer((request, response) => {

    // 获取请求体

    // 1. 声明一个变量
    let body = '';

    // 2. 绑定 'data' 事件
    request.on('data', chunk => {
        console.log(chunk); // <Buffer 75 73 65 72 6e 61 6d 65 3d 41 42 43 26 70 61 73 73 77 6f 72 64 3d 31 32 33>
        body += chunk;
    });

    // 3. 绑定 'end' 事件
    request.on('end', () => {
        console.log(body); // username=ABC&password=123

        // 响应
        response.end('Hello HTTP');
    });


});

//3. 监听端口, 启动服务
server.listen(9000, () => {
    console.log('服务已经启动, 端口 9000 监听中...');
});
