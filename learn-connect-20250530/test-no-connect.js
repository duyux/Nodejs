/**
 * 用Node的原生API
 */
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    if('GET' == req.method && '/public/images' == req.url.substr(0,7)
         && '.jpg' == req.url.substr(-4)) {
        fs.stat(__dirname + req.url, function (err, stat) {
            if(err || !stat.isFile()) {
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.end('404 Not Found');
                return;
            }
            server(__dirname + req.url, 'application/jpg');
            console.log('display')
        });
    } else if('GET' == req.method && '/' == req.url) {
        server(__dirname + '/public/index.html', 'text/html');
        console.log('display html')
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 Not Found');
    }

    function server(path, type) {
        res.writeHead(200, {'Content-Type': type});
        fs.createReadStream(path).pipe(res);
    }
})

// 监听端口
server.listen(3000, function () {
    console.log('server is listening on port 3000');
})