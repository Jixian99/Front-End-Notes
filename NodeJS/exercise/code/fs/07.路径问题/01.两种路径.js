// 1.导入fs模块
const fs = require('fs');

// 2. 相对路径

// 都是在 '7.路径问题' folder里面创建index.html
// fs.writeFileSync('./index.html', 'love');

// fs.writeFileSync('index.html', 'love');


// 在'7.路径问题' folder 外一层的folder 'fs' 里面创建index.html
// fs.writeFileSync('../index.html', 'love');


// 3. 绝对路径
// fs.writeFileSync('C:/Users/user/Downloads/index.html', 'love');

// fs.writeFileSync('/index.html', 'love');