// 导入express
const express = require('express');

// 导入path
const path = require('path');

// 创建应用对象
const app = express();

// 1. 设置模板引擎
app.set('view engine', 'ejs'); // pug  twing

// 2. 设置模板文件的存放位置    模板文件: 具有模板引擎语法内容的文件
app.set('views', path.resolve(__dirname, './views'));


// 创建路由
app.get('/home', (req, res)=>{

    // 3. render响应
    // res.render('模板的文件名', '数据');

    // 声明变量
    let title = '学习新知识';

    res.render('home', {title});


    res.end('hello express');
});


// 监听端口, 启动服务
app.listen('3000', ()=>{
    console.log("服务已经启动, 3000端口监听中...");  
})