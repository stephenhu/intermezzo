'use strict';

var cryptolib = require("crypto");

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    hash: DataTypes.STRING,
    icon: DataTypes.STRING,
    token: DataTypes.STRING,
    github: DataTypes.STRING,
    salt: DataTypes.STRING,
    mobile: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: function(user, options) {
        
        user.salt = cryptolib.randomBytes(16).toString("hex");
        
        var text = user.password + user.salt;
        var hmac = cryptolib.createHmac("sha512", "");
        var h = hmac.update(text).digest("hex");
        
        user.hash = h.substring(0, 64);
        
      }
    },
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};