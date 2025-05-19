var net=require('net');
var client=net.createConnection({port:8124},function(){//创建一个客户端
    console.log('connect to server')//打印连接服务器
    client.write('hello server')//向服务器发送数据
});

client.on('data',function(data){//监听服务器发送的数据
    console.log(data.toString())//打印服务器发送的数据
    client.end()//断开连接
});
client.on('end',function(){//监听客户端断开连接
    console.log('disconnect from server')//打印客户端断开连接
});