var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/next', function(req, res, next) {
  res.render('next', { title: 'Express' });
});

router.get('/regisform', function(req, res, next) {
  res.render('form', { title: 'Express' });
});


module.exports = router;


