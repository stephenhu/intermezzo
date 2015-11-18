var express = require('express');
var router = express.Router();

var models = require("../models");

/* create user */
router.post('/', function(req, res, next) {
  
  models.User
    .findOrCreate({
      where: {
        email: req.body.email
      },
      default: {
        password: req.body.password
      }
    }).then(function(user) {
      
      if(user[1]) {
        res.status(200).send({msg: "User created."});
      }
      else {
        res.status(403).send({msg: "User already exists."});
      }      
    });

});

module.exports = router;
