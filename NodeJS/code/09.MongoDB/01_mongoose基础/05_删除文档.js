//1. 安装 mongoose
//2. 导入 mongoose
const mongoose = require('mongoose');

//设置 strictQuery 为 true
mongoose.set('strictQuery', true);

//3. 连接 mongodb 服务                        数据库的名称
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

//4. 设置回调
// 设置连接成功的回调  once 一次   事件回调函数只执行一次
mongoose.connection.once('open', () => {
  //5. 创建文档的结构对象
  //设置集合中文档的属性以及属性值的类型
  let BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number,
    is_hot: Boolean
  });

  //6. 创建模型对象  对文档操作的封装对象    mongoose 会使用集合名称的复数, 创建集合
  let BookModel = mongoose.model('novel', BookSchema);

  //7. 删除一条
  // BookModel.deleteOne({_id: '66446bf86d086ca9c75f6366'}).then(data => {
  //   //输出 data 对象
  //   //如果没有出错, 则输出插入后的文档对象
  //   console.log(data);
  // }).catch(err => {
  //   //判断是否有错误
  //   console.error(err);
  // }).finally(() => {
  //   //8. 关闭数据库连接 (项目运行过程中, 不会添加该代码)
  //   mongoose.disconnect();
  // });


  //批量删除
  BookModel.deleteMany({is_hot: false}).then(data => {
    //输出 data 对象
    //如果没有出错, 则输出插入后的文档对象
    console.log(data);
  }).catch(err => {
    //判断是否有错误
    console.error(err);
    console.log('删除失败~~~');
  }).finally(() => {
    //8. 关闭数据库连接 (项目运行过程中, 不会添加该代码)
    mongoose.disconnect();
  });

});

// 设置连接错误的回调
mongoose.connection.on('error', () => {
  console.log('连接失败');
});

//设置连接关闭的回调
mongoose.connection.on('close', () => {
  console.log('连接关闭');
});

