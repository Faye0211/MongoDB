var userName='jspang'  //声明一个登录名
var timeStamp=Date.parse(new Date())   //声明登陆的时间戳
var jsonDdatabase={'loginUnser':userName,'loginTime':timeStamp}   //组成json字符串
var db=connect('log')   //链接数据库
db.login.insert(jsonDdatabase)    //插入数据库

print('[demo]log print success')    //没有错误显示成功