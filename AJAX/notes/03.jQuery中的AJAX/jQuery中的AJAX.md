## 第二章 jQuery中的AJAX

2. jQuery发送AJAX请求
jQuery有三种发送请求方法:

当你只是简单的请求数据,可以直接使用前两种方式请求,当你需要设置的东西较多的时候,可以使用$.ajax()方法

### 2.1 get请求

```
$.get(url, [data], [callback], [type])
url: 请求的URL地址
data: 请求携带的参数
callback: 载入成功时回调函数
type：设置返回内容格式，xml、html、script、json、text、_default
```


### 2.2 post请求

```
$.post(url, [data], [callback], [type])
url: 请求的URL地址
data: 请求携带的参数
callback: 载入成功时回调函数
type：设置返回内容格式，xml、html、script、json、text、_default
```

### 2.3 $.ajax 请求
```
 $.ajax( { 
    url, 
    参数 data, 
    请求类型 type (GET, POST...), 
    响应体结果 dataType,
    成功的回调
        success:function(data){
            console.log(data)
        },

    超时时间
        timeout:2000,

    失败的回调
        error:function(){
            console.log('出错了')
        },
    
    头信息设置
        headers:{
            c:300,
            d:400
        }
})
```