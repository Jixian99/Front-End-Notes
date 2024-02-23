//  导入HTTP模块
const http = require('http');

//  创建服务对象
const server = http.createServer((request, response) => {

    // http://127.0.0.1:9000/search?keyword=h5&num=1


    // 实例化URL的对象
    // let url = new URL('http://www.xxx.com/search?keyword=h5&num=1');
    // let url = new URL('/search?keyword=h5&num=1'); // 会报错 TypeError [ERR_INVALID_URL]: Invalid URL
    let url = new URL(request.url , 'http://www.xxx.com');
    console.log(url);

    // 输出路径
    console.log(url.pathname); //   /search

    
    // 输出查询字符串
    console.log(url.searchParams.get('keyword')); // h5


    response.end('url new');
});

// 监听端口, 启动服务
server.listen(9000, () => {
    console.log('服务已经启动, 端口 9000 监听中...');
});
  