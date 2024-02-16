# AJAX的学习笔记
AJAX学习的笔记

课程地址：   https://www.bilibili.com/video/BV1WC4y1b78y

## 第一章： Ajax简介

### 1.1 Ajax简介

- Ajax全称为Asynchronous Javascript And XML，即异步JS和XML
- 通过Ajax可以在浏览器中向服务器发送异步请求，最大的优势：**无刷新获取数据**
- AJAX不是新的编程语言，而是一种将现有的标准组合在一起使用的新方式



### 1.2 XML简介

- XML：可扩展标记语言
- XML：被设计用来传输和存储数据
- XML和HTML类似，不同点：HTML中都是预定义标签，XML中没有预定义标签，全是自定义标签，用来表示一些数据
- 现在已被JSON取代
- 比如说我有一个学生数据： name = "孙悟空" ; age = 18 ; gender = "男" ;
    ```
    用 XML 表示：
    <student>
        <name>孙悟空</name>
        <age>18</age>
        <gender>男</gender>
    </student>    
    ```

- 现在已被JSON取代
   ```
   用JSON表示：
   {"name":"孙悟空","age":18,"gender":"男"}
   ```




### 1.3 AJAX 的特点

#### 1.3.1 AJAX的优点

1. 可以无刷新页面与服务端进行通信
2. 允许你根据用户事件来更新部分页面内容

#### 1.3.2 AJAX 的缺点

1. 没有浏览历史，不能回退
2. 存在跨域问题（同源）
3. SEO不友好（爬虫获取不到信息）




