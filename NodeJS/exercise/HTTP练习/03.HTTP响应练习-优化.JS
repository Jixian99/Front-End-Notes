/**
 * 
 * 
 *  搭建 HTTP 服务，响应一个 4 行 3 列的表格，并且要求表格有 隔行换色效果 ，且 点击 单元格能 高亮显示
 * 
 * 
*/

// 引入http模块
const http = require("http");
const fs = require("fs");

// 建立服务
const server = http.createServer((request, response) => {

    // 读取文件内容
    let html = fs.readFileSync(__dirname + '/03_table.html');

    response.end(html); //设置响应体
});

// 监听端口
server.listen(9000, () => {
    console.log('服务启动中....');
})