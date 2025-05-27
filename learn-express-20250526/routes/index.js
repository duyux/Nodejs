var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('home', { title: 'home page' });
});

router.get('/about',function(req,res){
    res.render('about',{ title: "about page" })
})
module.exports = router;