// 1. 引入express
const express = require('express');

// 2. 创建应用对象
const app = express();

// 3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server', (request, response) => {
    // 设置响应头， 允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    // 设置响应体
    response.send('Hello AJAX');
});


// 要发post请求 但是发post之前要发option请求测试 但是没设置option类型的路由 所以改成app.all
// app.post('/server', (request, response)=>{

// 可以接受任意类型的请求
app.all('/server', (request, response) => {
    // 设置响应头
    response.setHeader('Access-Control-Allow-Origin', '*');


    // 允许自定义响应头
    response.setHeader('Access-Control-Allow-Headers', '*');


    // 设置响应体
    response.send('Hello AJAX POST');
});

// 可以接受任意类型的请求
app.all('/json-server', (request, response) => {
    // 设置响应头
    response.setHeader('Access-Control-Allow-Origin', '*');


    // 允许自定义响应头
    response.setHeader('Access-Control-Allow-Headers', '*');

    // 响应一个数据
    const data = {
        name: 'atguigu'
    };

    // 对对象进行字符串的转换
    let str = JSON.stringify(data);


    // 设置响应体
    response.send(str);
});



// 专门针对IE缓存
app.get('/ie', (request, response) => {
    // 设置响应头， 允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    // 设置响应体
    response.send('Hello IE');
});



// 请求超时与网络异常  
// 延时响应
app.get('/delay', (request, response) => {
    // 设置响应头， 允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    setTimeout(() => {
        // 设置响应体
        response.send('延时响应');
    }, 3000);

});


// 4. 监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动, 8000端口监听中...");
})