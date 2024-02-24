// 1. 安装EJS

// 2. 导入ejs
const ejs = require('ejs');

const fs = require('fs');

// 字符串
let knowledge = "新知识";
let weather = "下雨"
// let str = `学习 ${knowledge}}`;

// 声明变量
// let str = '学习<%= knowledge %>';

let str = fs.readFileSync('./01_html.html').toString();

// 使用ejs渲染
let result = ejs.render(str, {knowledge: knowledge, weather});

console.log(result);