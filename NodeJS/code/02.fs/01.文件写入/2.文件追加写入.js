// 1. 引入fs模块
const fs = require('fs');

// 2. 调用方法 appendFile
// fs.appendFile('./座右铭.txt', ', 择其善者而从之，其不善者而改之。', err => {
//     if(err) throw err;

//     console.log('追加成功');
// });


// fs.appendFileSync('./座右铭.txt', '\r\n温故而知新, 可以为师矣');


// writeFile实现追加写入
// a stand for append
fs.writeFile('./座右铭.txt', 'love love love', { flag: 'a' }, err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('写入成功');
});