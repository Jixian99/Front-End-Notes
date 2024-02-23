/**
 * 
 *  把'./座右铭.txt' 改名为 './论语'.txt'
 * 
 * 
*/

// 1. 引入fs模块
const fs = require('fs');

// // 2. 调用rename方法
// fs.rename('../1.文件写入/座右铭.txt', '../1.文件写入/论语.txt', err => {
//     if (err) {
//         console.log('操作失败');
//         return;
//     }

//     console.log('操作成功');
// });


//=======================================================================

// 文件的移动
/**
 * 
 *  把'../1.文件写入/data.txt' 移动到文件夹 '3.文件移动与重命名'
 * 
*/

fs.rename('../1.文件写入/data.txt', '../3.文件移动与重命名/data.txt', err => {
    if (err) {
        console.log('操作失败');
        return;
    }

    console.log('操作成功');
});