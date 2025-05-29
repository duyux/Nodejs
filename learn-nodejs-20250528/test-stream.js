var fs = require('fs');
var stream=fs.createReadStream('test.txt');
stream.on("data",function(chunk){
    console.log(chunk.toString()); //处理文件部分内容
});
stream.on("end",function(){
    console.log("end");//文件读取完成
});
