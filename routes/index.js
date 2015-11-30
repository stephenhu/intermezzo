var express = require('express');
var router = express.Router();

var helper = require("./helper");

/* index page. */
router.get('/', function(req, res, next) {
  
  helper.checkAuthenticated(req.cookies.uhlelo, function(err, user) {
      
    if(user) {
      res.redirect("/home");
    }
    else {

      res.clearCookie("uhlelo");
      res.render("index");
      
    }
    
  });

});

/* registration page. */
router.get('/register', function(req, res, next) {

  helper.checkAuthenticated(req.cookies.uhlelo, function(err, user) {

    if(user) {
      res.redirect("/home");
    }
    else {

      res.clearCookie("uhlelo");
      res.render("register");
      
    }
    
  });

});

/* home page. */
router.get('/home', function(req, res, next) {

  helper.checkAuthenticated(req.cookies.uhlelo, function(err, user) {
      
    if(user === null) {

      res.clearCookie("uhlelo");
      res.render("index");
      
    }
    else {
      res.render("home");
    }
    
  });
});

/* create site */
router.get('/createsite', function(req, res, next) {
  res.render('createsite');
});

/* manage sites */
router.get('/sites', function(req, res, next) {
  res.render('sites');
});

/* signout. */
router.get('/signout', function(req, res, next) {

  res.clearCookie("uhlelo");
  res.redirect("/");
      
});

module.exports = router;
