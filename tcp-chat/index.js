var net=require('net');


/**
 * 追踪连接数
 */
var count=0;

/**
*创建服务器
*/
var server=net.createServer(function(conn){
    //handle connection
    console.log(' welcome to  node-chat. '+count+' other people are connected at this time.'
    +'\n please write your name and press enter:'
    );
    count++;

    conn.on('data',function(data){
       console.log(data);
    });
    conn.on('close',function(){
        count--;
    });
});

/**
 * 监听
 */
server.listen(3000,function(){
    console.log(' server listening on 3000');
});