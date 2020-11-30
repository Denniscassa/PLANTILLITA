var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('inicio/inicio');
});

router.get('/ini', function(req, res, next) {
  console.log("Click");
  res.render('inicio/inicio');
});

module.exports = router;
