// 声明一个函数
function tiemo() {
    console.log('贴膜...');
}

// 捏脚 
function niejiao() {
    console.log('捏脚...');
}

// 暴露数据
// module.exports = {
//     tiemo,
//     niejiao
// };

// exports 暴露数据
// exports.niejiao = niejiao;
// exports.tiemo = tiemo;

// 1. module.exports 可以暴露任意数据
// module.exports = 'iloveyou';
// module.exports = 521;

// 2. 不能使用 exports = value 的形式暴露数据
// exports = 'iloveyou'; // 另外一边的file会获得{}

// exports = module.exports = {}
console.log(module.exports); // {}
console.log(module.exports === exports); // true

/**
 * 
 *  require('me.js') 获取的是module.exports 里面的值, 而不是exports里面的值, 
 *  当你改变了exports的值, 并不会改变module.exports里面的值, 此时的module.exports的值仍然是{}, 
 *  所以另一边index.js的console.log(me)会获取到{}
 * 
*/