var fs=require('fs');
var stdin=process.stdin;
var stdout=process.stdout;
var currfiles=[];
var stats=[];

fs.readdir(process.cwd(),function(err,files){
    console.log('');
    currfiles=files;
    if(!files.length){
        return console.log('no files in directory');//if no files in directory prin
    }
    console.log(' Select which file or directory you want to see\n');
        
    file(0);
});


//读取stdin的函数
function file(i){
    var filename=currfiles[i];

    fs.stat(__dirname+'/'+filename,function(err,stat){
        stats[i]=stat;

        if(stat.isDirectory()){
            console.log('  '+i+' '+filename+'/');//if it is a directory print / at the end of the name of the directory
        }else{
            console.log('  '+i+' '+filename);//if it is a file print the name of the file
        }

        i++;
        if(i==currfiles.length){//if all files are printed return to the main menu
           read();
        } else{
            file(i);
        }
    });
}

//read user input when files are shown
function read(){
    console.log('');
    stdout.write('  Enter your choice: ');
    stdin.resume();
    stdin.setEncoding('utf8');

    stdin.on('data',option);
}

//called with the option supplied by the user
function option(data){
    var filename=currfiles[Number(data)];
    if(!filename){
        stdout.write('    Enter you choice: ');
    } else{
        stdin.pause();//pause stdin when user input is correct
        if(stats[Number(data)].isDirectory()){//if it is a directory, read the directory again and show the files in it
            fs.readdir(__dirname+'/'+filename,function(err,files){
                console.log('');
                console.log('  ('+files.length +' files)');
                files.forEach(function(file){
                    console.log('  '+file);
                });
                console.log('');
            });
       } else{
            fs.readFile(__dirname+'/'+filename,'utf8',function(err,data){//read the file and print its content
                console.log('');
                console.log(data);
            });
         }
    }
}

