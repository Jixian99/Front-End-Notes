//1. 导入 express
const express = require('express');

//2. 创建路由器对象
const router = express.Router();

//3. 在 router 对象身上添加路由规则
// 后台
router.get('/admin', (req, res) => {
    res.send('后台首页');
});

// 后台设置
router.get('/setting', (req, res) => {
    res.send('后台设置页面');
});

//4. 暴露
module.exports = router;