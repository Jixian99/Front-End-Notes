/**
 * 按照要求搭建 HTTP 服务
 * 
 * GET   /login  显示表单网页
 * POST  /login  获取表单中的『用户名』和『密码』
 */

// 导入express
const express = require('express');

const bodyParser = require('body-parser');


// 创建应用对象
const app = express();


// 解析json格式的请求体的中间件
// const jsonParser = bodyParser.json();

// 解析querystring格式请求体的中间件
const urlencodedParser = bodyParser.urlencoded({ extended: false });


// 创建路由规则
app.get('/login', (req, res) => {
    //响应 HTML 文件内容
    res.sendFile(__dirname + '/10_form.html');
});


// post 规则
app.post('/login', urlencodedParser, (req, res) => {
    // 获取用户名和密码
    console.log(req.body);
    res.send('获取用户的数据')
});



// 监听端口, 启动服务
app.listen('3000', () => {
    console.log("服务已经启动, 3000端口监听中...");
})