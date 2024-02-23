// 1. 导入uniq包
// 在当前文件夹下 node_modules 中寻找同名的文件夹
const uniq = require('uniq');

// 2. 使用函数
let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];


const result = uniq(arr);

console.log(result);