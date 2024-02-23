/**
 * 
 *  需求:
 *    复制[video]文件夹下的[023_fs模块_文件流式读取.mp4]
 * 
 * 
*/

const fs = require('fs');
const process = require('process');


// 方式一 readFile
// 读取文件的内容
// let data = fs.readFileSync('../../../asset/video/023_fs模块_文件流式读取.mp4');

// // 写入文件
// fs.writeFileSync('../../../asset/video/023_fs模块_文件流式读取-2.mp4', data);

// console.log(process.memoryUsage()); // rss: 52219904字节   49MB

// ==============================================================================

// 方式二 流式操作
// 创建读取流对象
const rs = fs.createReadStream('../../../asset/video/023_fs模块_文件流式读取.mp4');

// 创建写入流对象
const ws = fs.createWriteStream('../../../asset/video/023_fs模块_文件流式读取-3.mp4');

// 绑定data事件
// rs.on('data', chunk => {
//     ws.write(chunk);
// });

// rs.on('end', () => {
//     console.log(process.memoryUsage()); // rss: 43868160字节   41MB
// });

// pipe: 管道
// rs读取数据之后通过管道交到ws
rs.pipe(ws);


/**
 * 
 *  第二种方式会更好一些, 它是边读边写, 需要用到的内存容量较小
 * 
*/