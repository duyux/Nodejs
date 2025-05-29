var fs = require('fs');
//var stream=fs.createReadStream('test.txt');
//获取工作目录下所有的文件
var files=fs.readdirSync(process.cwd());
files.forEach(function(file){
    //监听".css"后缀文件
    if(/\.css/.test(file)){
       fs.watchFile(process.cwd()+'/'+file,function(curr,prev){
          console.log('-'+file+" changed!")
       });
    }
});