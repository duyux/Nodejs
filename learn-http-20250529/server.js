var http = require('http');
var qs = require('querystring');

http.createServer(function (req, res) {
 if('/'==req.url){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end([
        '<!DOCTYPE html>',
        '<html>',
        '<head>',   
        '<title>Hello World!</title>',
        '</head>',
        '<body>',
        '<form method="post" action="/url">',
        '<h1>My form</h1>',
        '<fieldset>',
        '<label>Persional information</label>',
        '<p>What is your name?</p>',
        '<input type="text" name="name" placeholder="Your name here">',
        '<p><button type="submit">Submit</button></p>',
        '</fieldset>',
        '</form>',
        '</body>',
        '</html>'
    ].join(''));
 } else if('/url'==req.url){
    var body = '';
    req.on('data', function (chunk) {
        body += chunk;
    });
    req.on('end', function () {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<p>Your name is <b>'+qs.parse(body).name+'</b></p>');
    });
 } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end('404 Not Found');
 }
}).listen(3000,function(){
    console.log('server is listening on port 3000');
});