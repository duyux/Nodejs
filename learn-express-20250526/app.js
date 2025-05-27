var express=require('express');
var app=express();
const usersRouter = require('./routes/index');
app.use('/', usersRouter);

var exphbs = require('express-handlebars');
//console.log(exphbs)
app.engine('hbs', exphbs.engine({
    helpers: {
    },//工具函数
    layoutsDir: 'views',//视图
    defaultLayout: 'layouts/main',//默认布局文件
    extname: '.hbs'//视图后缀名
}));
app.set('view engine', 'hbs');//设置对应的视图引擎
app.set('views', './views/layouts');// 视图文件的位置

app.set('port',process.env.PORT || 3000);

// app.get('/',function(req,res){
//     res.render('home',{ title: "home page" })
// })
// app.get('/about',function(req,res){
//     res.render('about',{ title: "about page" })
// })

//定制404页面
// app.use(function(req,res){
//     res.status(404);
//     res.render('404');
// })

// //定制500页面
// app.use(function(err,req,res,next){
//     console.error(err.stack);
//     res.status(500);
//     res.render('500');
// })

app.listen(app.get('port'),function(){
    console.log('Expess started on http://localhost:'+
        app.get('port')+'; press Ctrl-C to terminate.')
})