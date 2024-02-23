// 1. 导入HTTP模块
const http = require('http');

// 2. 创建服务对象
const server = http.createServer((request, response)=>{
    // response.end('Hello HTTP server'); // 设置响应体

    response.setHeader('content-type','text/html;charset=utf-8');

    response.end('您好'); // 设置响应体, 中文响应体会出现乱码, 需设置响应头content-type
});

//3. 监听端口, 启动服务
server.listen(9000, () => {
    console.log('服务已经启动, 端口 9000 监听中...');
});
