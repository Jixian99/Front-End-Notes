// 导入express
const express = require('express');
const homeRouter = require('./routes/homeRouter');
const adminRouter = require('./routes/adminRouter');

// 创建应用对象
const app = express();

// 设置
app.use(homeRouter);
app.use(adminRouter);


app.all('*', (req, res) => {
    res.send('<h1>404 Not Found</h1>');
});


// 监听端口, 启动服务
app.listen('3000', () => {
    console.log("服务已经启动, 3000端口监听中...");
})