var cryptolib = require("crypto");

var models = require("../models");

function generateHash(email, salt, next) {

  var text = email + salt;
  var hmac = cryptolib.createHmac("sha512", "");
  var hash = hmac.update(text).digest("hex").substring(0, 64);

  next(hash);
    
};

exports.authenticate = function(email, password, next) {

  models.User
    .findOne({
      where: {email: email}
    }).then(function(user) {
      
      if(user) {
        
        var hash = user.get("hash");
        var salt = user.get("salt");
        
        generateHash(email, salt, function(h) {

          if(hash === h) {
            next(null, user);
          }
          else {
            next(null, null);
          }
          
        });        
        
      }
      else {
        next(null, null);
      }
      
    });
};

exports.checkAuthenticated = function(token, next) {
  
  models.User
    .findOne({
      where: {token: token}
    }).then(function(user) {
      next(null, user);
    });

};

exports.generateToken = function(email, next) {

  var text = email + Date.now() + "SECRET";
  var hmac = cryptolib.createHmac("sha512", "");
  var hash = hmac.update(text).digest("hex").substring(0, 64);

  next(hash);
    
};
