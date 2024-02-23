// 1. 导入HTTP模块
const http = require('http');

// 2. 创建服务对象
const server = http.createServer((request, response) => {

    // 获取请求的方法
    /**
     * 
     *  结果为
     *  GET
     * 
    */
    console.log(request.method);



    // 获取请求的url
    /**
     * 
     *  结果为
     *  /search?keyword=h5&num=1
     * 
     *  只包含url当中的路径与查询字符串
     * 
    */
    console.log(request.url);



    // 获取HTTP协议的版本号
    /**
     * 
     *  结果为
     *  1.1
     * 
    */
    console.log(request.httpVersion);


    // 获取HTTP请求头
    /**
    * 
    *  结果为
    *  {
            host: '127.0.0.1:9000',
            connection: 'keep-alive',
            'cache-control': 'max-age=0',
            'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'upgrade-insecure-requests': '1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
            accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,\*\/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'sec-fetch-site': 'none',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-user': '?1',
            'sec-fetch-dest': 'document',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-US,en;q=0.9'
        } 
        */
    console.log(request.headers);



    response.end('Hello HTTP server'); // 设置响应体

});

//3. 监听端口, 启动服务
server.listen(9000, () => {
    console.log('服务已经启动, 端口 9000 监听中...');
});
