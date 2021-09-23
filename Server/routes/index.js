var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', author:'Adrian Itxcoatl', appName:'WebApp', company: 'Software asombroso' });
});
/* agregando nueva ruta*/
router.get('/greeting', function(req, res, next){
  res.status(200).json({message:'Hola Dude'})
})
module.exports = router;
