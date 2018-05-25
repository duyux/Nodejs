var fs=require('fs');
fs.readdir(process.cwd(),function(err,files){
   console.log('');

   if(!files.length){
       return console.log('  No files to show!');
   };
   console.log(' select which file or directory you want to see\n');

   function file(i){
       var filename=files[i];

       fs.stat(__dirname + '/' + filename,function(err,stat){
           if(stat.isDirectory()){
               console.log(' '+i+ ' filename');
           } else {
            console.log(' '+i+ ' filename');
           }

           i++;
           if(i==file.length){
               console.log('');
               process.stdout.write(' Enter your choice:');
               process.stdin.resume();
           } else {
               file(i);
           }
       });
   };

   file(0);
});