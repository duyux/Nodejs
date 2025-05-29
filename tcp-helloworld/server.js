var net=require('net');
var server=net.createServer(function(conn){
    //socket.end('new connection!');
    console.log('new connection!');
    //console.log(conn.data.toString());
});

server.listen(3000,function(){
    console.log('server is listening on port 3000');
})

server.on('data',function(data){
    console.log('data received from client:');
    console.log(data.toString());
})
server.on('end',function(){
    console.log('end');
})
server.on('error',function(err){
    console.log(err);
})