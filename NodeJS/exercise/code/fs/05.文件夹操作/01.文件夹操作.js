// 1. 引入fs模块
const fs = require('fs');

// 2. 创建文件夹   调用mkdir方法  mk: make, dir: directory文件夹
// fs.mkdir('../html', err => {
//     if(err){
//         console.log('创建失败');
//         return;
//     };

//     console.log('创建成功');
// });


// ============================================

// 2.2 递归创建

// 创建失败
// fs.mkdir('../a/b/c', err => {
//     if (err) {
//         console.log('创建失败');
//         return;
//     };

//     console.log('创建成功');
// });

// 需要加recursive: true 形参, 才能创建成功
fs.mkdir('../a/b/c', { recursive: true }, err => {
    if (err) {
        console.log('创建失败');
        return;
    };

    console.log('创建成功');
});


//=====================================================

// 2-3 读取文件夹
// fs.readdir('../../../asset/video', (err, data) => {
//     if (err) {
//         console.log('读取失败');
//         return;
//     };

//     console.log(data);
// });
/**
 * 
 *  结果为
 *  [
        '023_fs模块_文件流式读取-2.mp4',
        '023_fs模块_文件流式读取-3.mp4',
        '023_fs模块_文件流式读取.mp4'
    ]
 * 
 * 
*/




fs.readdir('./', (err, data) => {
    if (err) {
        console.log('读取失败');
        return;
    };

    console.log(data);
});

/**
 *   结果为
 *  [ '1.文件夹操作.js' ]
 * 
*/


//===============================================================

// 2.4 删除文件夹  rm: remove 删除
// fs.rmdir('../html', err => {
//     if (err) {
//         console.log('删除失败');
//         return;
//     };

//     console.log('删除成功');
// } );


// 递归删除 不推荐使用
/**
 * 
 *  DeprecationWarning: In future versions of Node.js, fs.rmdir(path, { recursive: true }) will be removed. 
 *  Use fs.rm(path, { recursive: true }) instead
 * 
*/
// 只删除c folder
// fs.rmdir('../a/b/c', { recursive: true }, err => {
//     if (err) {
//         console.log('删除失败');
//         return;
//     };

//     console.log('删除成功');
// });

// 删除a folder和它的子文件夹
// fs.rmdir('../a', { recursive: true }, err => {
//     if (err) {
//         console.log('删除失败');
//         return;
//     };

//     console.log('删除成功');
// });



// 建议使用
fs.rm('../a', { recursive: true }, err => {
    if (err) {
        console.log('删除失败');
        return;
    };

    console.log('删除成功');
});