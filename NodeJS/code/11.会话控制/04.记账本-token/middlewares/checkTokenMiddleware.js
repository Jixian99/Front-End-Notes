const jwt = require('jsonwebtoken');

// 读取配置项
const { secret } = require('../config/config');

// 声明中间件去检测登录
module.exports = (req, res, next) => {
    // 读取token
    let token = req.get('token');

    if (!token) {
        return res.json({
            code: '2003',
            msg: 'token 缺失',
            data: null
        });
    }

    // 校验token
    jwt.verify(token, secret, (err, data) => {
        if (err) {
            return res.json({
                // 响应编号
                code: '2004',
                // 响应的信息
                msg: 'token校验失败',
                // 响应的数据
                data: null
            })
        }

        // 保存用户信息
        req.user = data;
        
        // 如果token 校验成功
        next();
    });
}