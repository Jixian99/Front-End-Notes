// 1. 引入fs模块
const fs = require('fs');

// 2. 调用stat 方法   stat: status
fs.stat('../../../asset/video/023_fs模块_文件流式读取.mp4', (err, data) => {
    if(err){
        console.log('操作失败');
        return;
    };

    console.log(data);

    // isFile
    console.log(data.isFile()); // true

    // isDirectory
    console.log(data.isDirectory()); // false
});


/**
 * 
 *  返回结果为
 *  Stats {
        dev: 4006607834,
        mode: 33206,
        nlink: 1,
        uid: 0,
        gid: 0,
        rdev: 0,
        blksize: 4096,
        ino: 6755399441465712,
        size: 20379707,
        blocks: 39808,
        atimeMs: 1708497124204.31,
        mtimeMs: 1708348705057.2053,
        ctimeMs: 1708348705057.2053,
        birthtimeMs: 1708495598912.369,
        atime: 2024-02-21T06:32:04.204Z,
        mtime: 2024-02-19T13:18:25.057Z,
        ctime: 2024-02-19T13:18:25.057Z,
        birthtime: 2024-02-21T06:06:38.912Z
    }
 * 
 * 
*/
