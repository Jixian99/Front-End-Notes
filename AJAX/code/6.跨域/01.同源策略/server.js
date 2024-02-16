const express = require('express');

const app = express();

app.get('/home' ,(request, response)=>{
    // 响应一个页面
    response.sendFile(__dirname + '/index.html')
})

app.get('/data' ,(request, response)=>{
    response.send('用户数据');
})

app.listen(4000, ()=>{
    console.log('端口4000服务已经启动');
})