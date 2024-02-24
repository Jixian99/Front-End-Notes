// 导入express
const express = require('express');


// 创建应用对象
const app = express();

// 创建路由
app.get('/other-response', (req, res) => {
    // 跳转响应
    // res.redirect('http://atguigu.com');//重定向

    // 下载响应
    // res.download(__dirname + '/package.json');

    // 响应 JSON
    // res.json({
    //     name: 'xian',
    //     slogan: 'abc'
    // });

    //响应文件内容
    res.sendFile(__dirname + '/02.form.html'); // path.resolve();
});



// 监听端口, 启动服务
app.listen('3000', () => {
    console.log("服务已经启动, 3000端口监听中...");
})