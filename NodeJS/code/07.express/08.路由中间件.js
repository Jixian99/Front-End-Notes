/**
 * 
 *  针对 /admin   /setting 的请求, 要求URL携带code=521参数, 如未携带提示[暗号错误]
 * 
 * 
*/

// 导入express
const express = require('express');

const fs = require('fs');
const path = require('path');

// 创建应用对象
const app = express();

// 声明全局中间件函数
function recordMiddleware(req, res, next) {
    // 获取 url 和ip
    let { url, ip } = req;

    // 将信息存在文件中access.log
    fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url} ${ip}\r\n`);

    // 调用next
    next();
}

// 使用中间件函数
app.use(recordMiddleware);

// 创建路由
app.get('/home', (req, res) => {

    res.send('前台首页');
});


// 声明路由中间件函数
let checkCodeMiddlerware = (req, res, next) => {
    // 判断url中是否code参数等于521
    if (req.query.code === '521') {
        next();
    } else {
        res.send('暗号错误');
    }
};

// 后台
app.get('/admin', checkCodeMiddlerware, (req, res) => {
    res.send('后台首页');
});

// 后台设置
app.get('/setting', checkCodeMiddlerware, (req, res) => {
    res.send('后台设置页面');
});

app.all('*', (req, res) => {
    res.send('<h1>404 Not Found</h1>');
});


// 监听端口, 启动服务
app.listen('3000', () => {
    console.log("服务已经启动, 3000端口监听中...");
})