// 1. 导入fs模块
const fs = require('fs');

// 相对路径参照物: 命令行的工作目录
// fs.writeFileSync('./index.html', 'love');



// 绝对路径 '全局变量', 保存的是： 所在文件的所在目录的绝对路径
console.log(__dirname); // C:\Users\User\Downloads\Front-End-Notes\NodeJS\code\fs\7.路径问题

fs.writeFileSync(__dirname + '/index.html', 'love');