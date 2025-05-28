//测试Node的事件
var EventEmitter=require('events').EventEmitter;
var event=new EventEmitter();
event.on('test',function(){
    console.log('test event emitted.')
})
event.emit('test');