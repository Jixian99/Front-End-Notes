var express = require('express');
var router = express.Router();

// 导入用户模型
const UserModel = require('../../models/UserModel');

const md5 = require('md5');

// 注册
router.get('/reg', (req, res) => {
    // 响应 HTML 内容
    res.render('auth/reg');

})


router.post('/reg', (req, res) => {
    // 做表单验证

    // 获取请求体数据
    UserModel.create({ ...req.body, password: md5(req.body.password) }).then(data => {
        //输出 data 对象
        //如果没有出错, 则输出插入后的文档对象

        res.render('success', { msg: '注册成功', url: '/login' });

    }).catch(err => {
        //判断是否有错误
        console.error(err);
        res.status(500).send('注册失败');
    });
})

// 登录
router.get('/login', (req, res) => {
    // 响应 HTML 内容
    res.render('auth/login');

})

// 登录
router.post('/login', (req, res) => {
    // 获取用户名和密码
    let { username, password } = req.body;

    // 查询数据库
    UserModel.findOne({ username: username, password: md5(password) }).then(data => {
        // 判断data
        if (!data) {
            return res.send('账号或密码错误')
        }

        // // 写入session
        req.session.username = data.username;
        req.session._id = data._id;

        // 登陆成功响应
        res.render('success', { msg: '登录成功', url: '/account' });

    }).catch(err => {
        //判断是否有错误
        console.error(err);
        res.status(500).send('登录失败');
    });
})


// 退出登录
router.post('/logout', (req, res) => {
    // 销毁session
    req.session.destroy(() => {
        res.render('success', { msg: '退出成功', url: '/login' })
    })
})


module.exports = router;
