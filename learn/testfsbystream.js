var fs = require('fs');
var stream=fs.createReadStream('resource.json');
stream.on('data',function(chunk){
    console.log('11')
    console.log(chunk.toString());
})
stream.on('end',function(){
    console.log('end');
})