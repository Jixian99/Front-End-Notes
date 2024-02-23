//  导入HTTP模块
const http = require('http');

// 1. 导入url模块
const url = require('url');

//  创建服务对象
const server = http.createServer((request, response) => {

    // http://127.0.0.1:9000/search?keyword=h5&num=1

    // 2.解析request.url
    console.log(request.url);

    let res = url.parse(request.url, true);
    console.log(res);

    // 路径
    let pathname = res.pathname;
    console.log(pathname); //   /search



    // 查询路径字符串
    let keyword = res.query.keyword;
    console.log(keyword); //   h5

    response.end('url');
});

// 监听端口, 启动服务
server.listen(9000, () => {
    console.log('服务已经启动, 端口 9000 监听中...');
});
