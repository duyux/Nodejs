//创建一副用base64表示的图片或文本，然后将其作为二进制PNG图片或文本的形式写入到文件中
var mybuffer= Buffer.from('aGVsbG8gd29ybGQ=','base64');
console.log(mybuffer);
// 指定文件输出路径和文件名
const filePath = './output.txt';
require('fs').writeFileSync(filePath,mybuffer,err=>{
    console.log("错误：",err)
});