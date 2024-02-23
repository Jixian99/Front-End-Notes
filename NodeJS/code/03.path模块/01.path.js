// 1. 导入fs模块
const fs = require('fs');
const path = require('path');

/**
 * 
 *  结果为 
 *  C:\Users\user\Downloads\Front-End-Notes\NodeJS\code\path模块/index.html
 * 
 *  绝对路径里面有两种斜杠 (/ \) , 不规范
 * 
 * 
*/
console.log(__dirname + '/index.html');


//===========================================================================

// resolve: 解决
/**
 * 
 *  结果为
 *  C:\Users\user\Downloads\Front-End-Notes\NodeJS\code\path模块\index.html
 * 
*/
// console.log(path.resolve(__dirname, './index.html'));
// console.log(path.resolve(__dirname, 'index.html'));


/**
 * 
 *  结果为
 *  C:\index.html
 *  第二个参数变成了绝对路径
 * 
*/
// console.log(path.resolve(__dirname, '/index.html'));

// console.log(path.resolve(__dirname, '/index.html', './test')); // C:\index.html\test


//=================================================================

// sep 分隔符
/**
 * 
 *  结果为
 *  \
 * 
*/
console.log(path.sep);



//=================================================================


// parse  解析路径
// __filename 获取文件的绝对路径
/**
 * 
 *  结果为
 *  C:\Users\user\Downloads\Front-End-Notes\NodeJS\code\path模块\01.path.js
 * 
*/
console.log(__filename);
let str = 'C:\\Users\\Xian\\Downloads\\Front-End-Notes\\NodeJS\\code\\path模块\\01.path.js';

/**
 * 
 *  结果为
 * {
    root: 'C:\\',
    dir: 'C:\\Users\\user\\Downloads\\Front-End-Notes\\NodeJS\\code\\path模块',
    base: '01.path.js',
    ext: '.js',
    name: '01.path'
    }
 * 
*/
console.log(path.parse(str));


//=============================================================================


// basename : 获取文件名
console.log(path.basename(str)); // 01.path.js



// dirname : 获取文件夹路径
console.log(path.dirname(str));  // C:\Users\user\Downloads\Front-End-Notes\NodeJS\code\path模块


// extname:  extension name 
console.log(path.extname(str)); // .js


