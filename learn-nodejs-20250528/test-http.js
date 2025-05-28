var http=require('http');
var server=http.createServer(function(req,res){
    res.writeHead(200);
    res.end('hello world');
})

server.listen(3000,function(){
    console.log('started on http://localhost:3000; press Ctrl-C to terminate.')
});