var net = require('net');
var client=net.connect(3000,'localhost');
client.on('connect',function(){
    console.log('connected to server!');
    client.write('hello server!');
})