var express = require('express');
var router = express.Router();

// 导入 moment
const moment = require('moment');
const AccountModel = require('../../models/AccountModel');

// 格式化日期对象
// console.log(moment(new Date()).format('YYYY-MM-DD'));

/* GET home page. */
// 记账本列表
router.get('/account', function (req, res, next) {
  // 获取所有的账单信息
  // let accounts = db.get('accounts').value();

  // 读取集合信息
  AccountModel.find().sort({ time: -1 }).then(data => {
    //输出 data 对象
    //如果没有出错, 则输出插入后的文档对象
    console.log(data);

    res.render('list', { accounts: data, moment: moment });

  }).catch(err => {
    //判断是否有错误
    console.error(err);
    res.status(500).send('读取失败');
  });

});

// 添加记录
router.get('/account/create', function (req, res, next) {
  res.render('create');
});

// 新增记录
router.post('/account', (req, res) => {
  // 查看表单数据 2023-02-24 => new Date()
  // 2023-02-24 => Moment => new Date()

  // 插入数据库
  AccountModel.create({
    ...req.body,
    // 修改time 属性的值
    time: moment(req.body.time).toDate()

  }).then(data => {
    //输出 data 对象
    //如果没有出错, 则输出插入后的文档对象
    console.log(data);
    // 成功提醒
    res.render('success', { msg: '添加成功哦~~~', url: '/account' });
  }).catch(err => {
    //判断是否有错误
    console.error(err);
    res.status(500).send('插入失败');
  })
  // .finally(() => {
  //   //8. 关闭数据库连接 (项目运行过程中, 不会添加该代码)
  //   mongoose.disconnect();
  // });
});

// 删除记录
router.get('/account/:id', (req, res) => {
  // 获取params的id参数
  let id = req.params.id;

  // 删除
  AccountModel.deleteOne({ _id: id }).then(data => {
    //输出 data 对象
    //如果没有出错, 则输出插入后的文档对象
    console.log(data);

    // 提醒
    res.render('success', { msg: '删除成功哦~~~', url: '/account' });
  }).catch(err => {
    //判断是否有错误
    console.error(err);
    res.status(500).send('删除失败');
  })


})

module.exports = router;
