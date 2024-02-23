// 1. 引入fs模块
const fs = require('fs');


// 2. 创建读取流对象
const rs = fs.createReadStream('../../../asset/video/023_fs模块_文件流式读取.mp4');


// 3. 绑定data事件
// chunk : 块， 大块
rs.on('data', chunk => {
    console.log(chunk.length); // 65536字节 => 64kb
    console.log(chunk); 
    // console.log(chunk.toString());  // 会得到一堆乱码, 因为MP4文件当中存的是视频信息, 不是utf-8字符的信息
});

// 4. end
rs.on('end', ()=>{
    console.log('读取完成');
});