//导入 jsonwebtokan
const jwt = require('jsonwebtoken');


// 创建(生成) token
let token = jwt.sign({
    username: 'zhangsan'
}, 'atguigu', {
    expiresIn: 60 //单位是 秒
});


// 校验token
jwt.verify(token, 'atguigu', (err, data) => {
    if(err){
        console.log('校验失败');
        return
    }
    console.log(data);
})