var http = require("http");
var fs = require("fs");
var url = require("url");

var server = http.createServer();    // 创建一个http.Server对象实例
server.on("request",handle);

function handle(request,response)
{
// 回调函数，当底层得到文档后，会调用该函数。
       function callback(err,data)
       {
             response.write(data);
             response.end();       
       }
       var path = url2path(request.url); // 得到path
console.log(path);
       // 异步方式不会阻塞主程序进程
       fs.readFile(__dirname+"/public"+path,callback); 
}
server.listen(3000)    // 让服务器监听3000端口

// 把URL转换成资源路径
function url2path(url_str)
{
    var urlObj = url.parse(url_str);  // 把url信息封装成JSON对象
    var path = urlObj.path;  // 得到路径信息
    return path;
}
