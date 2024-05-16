//1. 安装 mongoose
//2. 导入 mongoose
const mongoose = require('mongoose');

//3. 连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

//4. 设置连接回调
//连接成功
// 设置连接成功的回调,  once一次， 事件回调函数只执行一次
mongoose.connection.once('open', () => {
    console.log('连接成功');
    //5. 创建文档结构对象
    // 设置集合中文档的属性以及属性值的类型
    let BookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number
    });

    //6. 创建文档模型对象
    let BookModel = mongoose.model('books', BookSchema);


    //7. 插入文档
    BookModel.create({
        name: '西游记',
        author: '吴承恩',
        price: 19.9
    })
    .then(data => {
        //输出 data 对象
        console.log(data);
    }).catch(err => {
        console.error(err);
    })
    .finally(() => {
         //8. 断开连接
        mongoose.disconnect();
    });
});

//连接出错
mongoose.connection.on('error', () => {
    console.log('连接出错~~');
})

//连接关闭
mongoose.connection.on('close', () => {
    console.log('连接关闭');
})

// 关闭mongodb的连接
// setTimeout(() => {
//     mongoose.disconnect();
// }, 2000);