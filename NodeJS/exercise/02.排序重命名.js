// 1. 导入fs模块
const fs = require('fs');


// 读取code文件类
const files = fs.readdirSync('./code/fs');

// console.log(files);

// 遍历数组
files.forEach(item => {
    // console.log(item);

    let itemFile = fs.readdirSync('./code/fs/' + item);

    // console.log(itemFile);

    itemFile.forEach((itemFileContent, index) => {
        // 拆分文件名
        let data = itemFileContent.split('.');
        let [num, name] = data;

        // console.log(data);
        // console.log(num);

        //index 自增
        index++;

        //判断
        index = index < 10 ? '0' + index : index;


        // 创建新的文件名
        let newName = index + '.' + name + '.js';
        console.log(newName);


        // 重命名
        fs.renameSync(`./code/fs/${item}/${itemFileContent}`, `./code/fs/${item}/${newName}`, );
    });
})