var net=require('net')//引入ne
var server=net.createServer(function(socket){//创建一个服务器
    socket.on('data',function(data){//监听客户端发送的数据
        console.log(data.toString());//打印客户端发送的数据
        socket.write('hello client')//向客户端发送数据
    })
    socket.on('end',function(){//监听客户端断开连接
        console.log('client disconnect')//打印客户端断开连接
    })
})
server.listen(8124,function(){//监听8124端口
    console.log('server is running at port 8124')//打印服务器正在监听8124端口
})