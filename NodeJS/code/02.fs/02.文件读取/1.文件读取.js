// 1. 引入fs模块

const fs = require('fs');


// 2. 异步读取
fs.readFile('../1.文件写入/座右铭.txt', (err, data) => {
    if(err) throw err;
    console.log(data.toString());
});


// 3. 同步读取
let data = fs.readFileSync('../1.文件写入/观书有感.txt');

console.log(data);
console.log(data.toString());