var express = require('express');
var router = express.Router();

var helper = require("./helper");
var models = require("../models");

// login
router.post('/', function(req, res, next) {
  
  if(req.body.email === null || req.body.password === null) {
    res.status(401).end();
  }
  else {
    
    models.User
      .findOne({
        where: {token: req.cookies.uhlelo}        
      }).then(function(user) {
        
        if(user) {
          
          helper.authenticate(req.body.email, req.body.password, function(user) {
            console.log(user);
            if(user) {
              
              res.cookie("uhlelo", helper.generateToken(user));
              res.status(200).send({msg: "Authenticated"});
              
            }
            else {
              res.status(401).send({msg: "Invalid credentials."});
            }
            
          });
          
        }
        else {
          res.status(401)
        }
        
      });
  }
  
});

// logout
router.delete('/', function(req, res, next) {
  
  if(req.cookies.uhlelo === "TEST"){
    
    res.clearCookie("uhlelo");
    res.status(200).send({msg: "Successfully logged out."});
    
  }
  else {
  
    models.User
      .findOne({
        where: {token: req.cookies.newhire}
      }).then(function(user) {
        
        if(user) {
          
          user.set("token", null);
          user.save();
          
        }
        
        res.clearCookie("uhlelo");
        res.status(200).send({msg: "Successfully logged out."});
        
      });  
  }
  
});

module.exports = router;