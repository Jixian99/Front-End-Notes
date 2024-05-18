const express = require('express');

// 导入中间件
let checkTokenMiddleware = require('../../middlewares/checkTokenMiddleware'); 

const router = express.Router();

// 导入 moment
const moment = require('moment');
const AccountModel = require('../../models/AccountModel');


/* GET home page. */
// 记账本列表
router.get('/account', checkTokenMiddleware, function (req, res, next) {


    // 读取集合信息
    AccountModel.find().sort({ time: -1 }).then(data => {
        //输出 data 对象
        //如果没有出错, 则输出插入后的文档对象
        console.log(data);

        res.json({
            // 响应编号
            code: '0000',
            // 响应的信息
            msg: '读取成功',
            // 响应的数据
            data: data
        })

    }).catch(err => {
        //判断是否有错误
        console.error(err);
        res.status(500).send('读取失败');

        res.json({
            // 响应编号
            code: '1001',
            // 响应的信息
            msg: '读取失败',
            // 响应的数据
            data: null
        })
    });

    // 获取所有的账单信息
    // let accounts = db.get('accounts').value();


});

// 新增记录
router.post('/account', checkTokenMiddleware, (req, res) => {
    // 查看表单数据 2023-02-24 => new Date()
    // 2023-02-24 => Moment => new Date()

    // 表单验证

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
        res.json({
            // 响应编号
            code: '0000',
            // 响应的信息
            msg: '添加成功哦~~~',
            // 响应的数据
            data: data
        })

    }).catch(err => {
        //判断是否有错误
        console.error(err);

        res.json({
            // 响应编号
            code: '1002',
            // 响应的信息
            msg: '插入失败',
            // 响应的数据
            data: null
        })
    })
    // .finally(() => {
    //   //8. 关闭数据库连接 (项目运行过程中, 不会添加该代码)
    //   mongoose.disconnect();
    // });
});

// 删除记录
router.delete('/account/:id', checkTokenMiddleware, (req, res) => {
    // 获取params的id参数
    let id = req.params.id;

    // 删除
    AccountModel.deleteOne({ _id: id }).then(data => {
        //输出 data 对象
        //如果没有出错, 则输出插入后的文档对象
        console.log(data);

        // 提醒

        res.json({
            // 响应编号
            code: '0000',
            // 响应的信息
            msg: '删除成功哦~~~',
            // 响应的数据
            data: {}
        })

    }).catch(err => {
        //判断是否有错误
        console.error(err);

        res.json({
            // 响应编号
            code: '1003',
            // 响应的信息
            msg: '删除失败',
            // 响应的数据
            data: null
        })
    })


})


// 获取单个账单信息
router.get('/account/:id', checkTokenMiddleware, (req, res) => {
    // 获取id参数
    let { id } = req.params;

    // 查询数据库
    AccountModel.findById(id).then(data => {

        res.json({
            // 响应编号
            code: '0000',
            // 响应的信息
            msg: '读取成功哦~~~',
            // 响应的数据
            data: data
        })
    }).catch(error => {
        res.json({
            // 响应编号
            code: '1004',
            // 响应的信息
            msg: '读取失败',
            // 响应的数据
            data: null
        })
    })

})


// 更新单个账单信息
router.patch('/account/:id', checkTokenMiddleware, (req, res) => {
    // 获取id参数
    let { id } = req.params;

    // 查询数据库
    AccountModel.updateOne({ _id: id }, req.body).then(data => {

        // 再次查询数据库来获取单条数据
        AccountModel.findById(id).then(data => {

            res.json({
                // 响应编号
                code: '0000',
                // 响应的信息
                msg: '读取成功哦~~~',
                // 响应的数据
                data: data
            })
        }).catch(error => {
            res.json({
                // 响应编号
                code: '1004',
                // 响应的信息
                msg: '读取失败',
                // 响应的数据
                data: null
            })
        })

    }).catch(error => {
        res.json({
            // 响应编号
            code: '1005',
            // 响应的信息
            msg: '更新失败',
            // 响应的数据
            data: null
        })
    })

})

module.exports = router;
