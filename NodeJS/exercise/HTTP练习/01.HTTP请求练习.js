/**
 * 
 *  需求：
 *  按照以下要求搭建 HTTP 服务
 *  |  请求类型(方法) | 请求地址 | 响应体结果 |
 *  | ============== | ======= | ========= |
 *  | get            | /login  | 登录页面 |
 *  | get            | /reg  | 注册页面 |
 * 
 * 
 * 
*/

//1、引入http模块
const http = require("http");

//2、建立服务
const server = http.createServer((request, response) => {

    // let { url, method } = request; // /对象的解构赋值
    let { method } = request; // /对象的解构赋值

    //设置响应头信息
    //解决中文乱码
    response.setHeader('content-type', 'text/html;charset=utf-8');

    // 获取请求的url路径
    let { pathname } = new URL(request.url, 'http://127.0.0.1');

    // 判断
    if (method === 'GET' && pathname === '/login') {
        // 登录的情形
        response.end('登录页面');
    } else if (method === 'GET' && pathname === '/reg') {
        // 注册的情形
        response.end('注册页面');
    } else {
        response.end("<h1>404 Not Found</h1>")
    };
});

// 3. 监听端口
server.listen(9000, () => {
    console.log('服务启动中....');
})