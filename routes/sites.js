var express = require('express');
var router = express.Router();

/* index page */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* create site */
router.post('/', function(req, res, next) {
  res.render('register');
});

/* home page. */
router.get('/home', function(req, res, next) {
  res.render('home');
});

module.exports = router;
