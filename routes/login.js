var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login/login');
});

router.get('/ini', function(req, res, next) {
  res.redirect('/inicio')
});

module.exports = router;
