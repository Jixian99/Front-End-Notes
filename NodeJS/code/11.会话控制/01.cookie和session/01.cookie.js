// 导入express
const express = require('express');

// 安装 cookie-parser npm i cookie-parser
// 引入 cookieParser 包
const cookieParser = require('cookie-parser');

// 创建应用对象
const app = express();

// 设置 cookieParser 中间件
app.use(cookieParser());

// 创建路由
app.get('/set-cookie', (req, res) => {
    // res.cookie('name','zhangsan'); // 会在浏览器关闭的时候销毁
    res.cookie('name', 'lisi', { maxAge: 60 * 1000 }); // max 最大 age 年龄
    res.cookie('theme', 'blue');
    res.send('home');
});

// 删除cookie
app.get('/remove-cookie', (req, res) => {
    // 调用方法
    res.clearCookie('name');


    res.send('删除成功');
});


// 读取cookie
app.get('/get-cookie', (req, res) => {
    //读取 cookie
    console.log(req.cookies);

    res.send('读取成功');
});

// 监听端口, 启动服务
app.listen('3000', () => {
    console.log("服务已经启动, 3000端口监听中...");
})