### 原生Ajax

1. XMLHttpRequest，AJAX 的所有操作都是通过该对象进行的。

2. 当你前端想设置自定义的请求头时,需要如此后端设置响应头

```js
//表示接收任意类型的请求					
    app.all('/server', (request, response) => { 
        //响应头     
        response.setHeader('Access-Control-Allow-Origin', '*');  // 允许跨域 
        response.setHeader('Access-Control-Allow-Headers', '*'); // 允许自定义响应头
    });
```

3. `ajax请求状态`:xhr.readyState
   0：请求未初始化，还没有调用 open()。

 ​	1：请求已经建立，但是还没有发送，还没有调用 send()。

 ​	2：请求已发送，正在处理中（通常现在可以从响应中获取内容头）。

 ​	3：请求在处理中；通常响应中已有部分数据可用了，没有全部完成。

 ​	4：响应已完成；您可以获取并使用服务器的响应了



### 〇-Ajax的使用
使用步骤:
```js
    // 1) 创建 XMLHttpRequest 对象
    var xhr = new XMLHttpRequest();

    // 2) 设置请求信息
    xhr.open(method, url);
    //可以设置请求头，一般不设置
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // 3) 发送请求
    xhr.send(body) //get 请求不传 body 参数，只有 post 请求使用

    // 4) 接收响应
    //xhr.responseXML 接收 xml 格式的响应数据
    //xhr.responseText 接收文本格式的响应数据
    xhr.onreadystatechange = function (){
        if(xhr.readyState == 4 && xhr.status == 200){
            var text = xhr.responseText;
            console.log(text);
        }
    }
```