/**
 * 
 * 
 *  搭建 HTTP 服务，响应一个 4 行 3 列的表格，并且要求表格有 隔行换色效果 ，且 点击 单元格能 高亮显示
 * 
 * 
*/

// 引入http模块
const http = require("http");

// 建立服务
const server = http.createServer((request, response) => {

    response.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    td{
    padding: 20px 40px;
    }
    table tr:nth-child(odd){
    background: #aef;
    }
    table tr:nth-child(even){
    background: #fcb;
    }
    table, td{
    border-collapse: collapse;
    }
    </style>
    </head>
    <body>
    <table border="1">
    <tr><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td></tr>
    </table>
    <script>
    //获取所有的 td
    let tds = document.querySelectorAll('td');
    //遍历
    tds.forEach(item => {
    item.onclick = function(){
    this.style.background = '#222';
    }
    })
    </script>
    </body>
    </html>
    `); //设置响应体
});

// 监听端口
server.listen(9000, () => {
    console.log('服务启动中....');
})