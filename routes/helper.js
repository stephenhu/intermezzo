var cryptolib = require("crypto");

var models = require("../models");

function generateHash(value, salt, next) {

  var text = value + salt;
  var hmac = cryptolib.createHmac("sha512", "");
  var hash = hmac.update(text).digest("hex").substring(0, 64);

  next(hash);

}

exports.generateToken = function(value, next) {

  var text = value + "SECRET";
  var hmac = cryptolib.createHmac("sha512", "");
  var hash = hmac.update(text).digest("hex").substring(0, 64);

  next(hash);
    
};

exports.checkAuthenticated = function(token, next) {
  
  if(token === null) {
    next(null, null);
  }
  else {

    models.User
      .findOne({
        where: {token: token}
      }).then(function(user) {
        
        if(user) {
          next(null, user);
        }
        else {
          next(null, null);
        }
  
    });    

  }

};
