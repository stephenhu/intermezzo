var express = require('express');
var router = express.Router();

/* index page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* registration page. */
router.get('/register', function(req, res, next) {
  res.render('register');
});

/* home page. */
router.get('/home', function(req, res, next) {
  res.render('home');
});

/* create site */
router.get('/createsite', function(req, res, next) {
  res.render('createsite');
});

/* manage sites */
router.get('/sites', function(req, res, next) {
  res.render('sites');
});

module.exports = router;