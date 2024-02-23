// 1. 导入HTTP模块
const http = require('http');

// 2. 创建服务对象
const server = http.createServer((request, response) => {

    // 1. 设置响应状态码
    // response.statusCode = 203;

    // 2. 设置响应状态描述
    // response.statusMessage = "iloveyou";

    // 3. 设置响应头信息
    // response.setHeader('content-type', 'text/html;charset=utf-8');
    // response.setHeader('server', 'Node.js');
    // response.setHeader('myHeader', 'test test test');
    // response.setHeader('test', ['a','b','c']); // 可以设置多个同名的响应头


    // 4. 设置响应体 
    response.write('love');
    response.write('love');
    response.write('love');

    // 只允许一个end()
    response.end();
});

//3. 监听端口, 启动服务
server.listen(9000, () => {
    console.log('服务已经启动, 端口 9000 监听中...');
});
