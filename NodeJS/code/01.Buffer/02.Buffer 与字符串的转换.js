//  Buffer 与字符串的转换
// 我们可以借助 toString 方法将 Buffer 转为字符串
let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);

//  toString 默认是按照 utf-8 编码方式进行转换的。
console.log(buf_4.toString()); // iloveyou

// []
let buf = Buffer.from('hello');
console.log(buf); // <Buffer 68 65 6c 6c 6f>
console.log(buf[0]); // 104

// 转换为二进制
console.log(buf[0].toString(2)); // 01101000

buf[0] = 95;
console.log(buf); // <Buffer 5f 65 6c 6c 6f>
console.log(buf.toString()); // _ello


// 溢出
let buf_2 = Buffer.from('hello');
buf_2[0] = 361; // 舍弃高位的数字 0001 0110 1001  => 0110 1001

console.log(buf_2[0]); // 105
console.log(buf_2); // <Buffer 69 65 6c 6c 6f>
console.log(buf_2.toString()); // iello



// 中文
// 一个 utf-8 的字符 一般 占 3 个字节
let buf_3 = Buffer.from('您好');
console.log(buf_3); // <Buffer e6 82 a8 e5 a5 bd>