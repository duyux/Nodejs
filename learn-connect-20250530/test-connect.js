var connect = require('connect');
var serveStatic = require('serve-static'); // 静态文件中间件
var morgan = require('morgan');// 日志中间件
var server=connect();

server.use(serveStatic(__dirname + '/public')); // 静态文件目录
server.use(morgan('dev')); // 输出请求日志

server.listen(3000,function(){
    console.log('server is running at port 3000');
});