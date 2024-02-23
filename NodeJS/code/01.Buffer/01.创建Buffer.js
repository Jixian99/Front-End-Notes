// 1. alloc
//创建了一个长度为 10 字节的 Buffer，相当于申请了 10 字节的内存空间，每个字节的值为 0
// alloc会把旧的内存数据每个二进制位都清零
let buf_1 = Buffer.alloc(10); // 结果为 <Buffer 00 00 00 00 00 00 00 00 00 00>
console.log(buf_1);


// 2. allocUnsafe
//创建了一个长度为 10 字节的 Buffer，buffer 中可能存在旧的数据, 可能会影响执行结果，所以叫unsafe
// allocUnsafe并不会把旧的内存数据都清零/清空, 所以用allocUnsafe创建的Buffer其中可能会存在旧数据

/**
 * 
 *  为什么allocUnsafe不安全, 还要使用呢?
 *  - allocUnsafe的速度比alloc快一些, 因为不需要做归零的操作
 * 
*/

// 结果为 <Buffer 00 00 00 00 00 00 00 00 00 00>
let buf_2 = Buffer.allocUnsafe(10);

// 结果为<Buffer 20 17 3a 7a 5e 01 00 00 80 96 9c 78 5e 01 00 00 00 20 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 ff ff ... 9950 more bytes>
// let buf_2 = Buffer.allocUnsafe(10000);
console.log(buf_2); 


// 3. from
//通过字符串创建 Buffer
/**
 * 
 *  在转换时, 每个字母都会转换为那个字符在UNICODE码表当中对应的数字, 然后数字转换为二进制* 存到Buffer当中, 输出的时候是十六进制*
 * 
 *  例子:
 *  H在ASCII中的数字是104(十进制) 转换为Buffer中的十六进制就是68(十六进制)
 * 
*/
let buf_3 = Buffer.from('hello');
console.log(buf_3); // 结果为 <Buffer 68 65 6c 6c 6f>

//通过数组创建 Buffer
let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
console.log(buf_4); // 结果为 <Buffer 69 6c 6f 76 65 79 6f 75>