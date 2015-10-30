var gulp = require("gulp");
var path = require("path");
var symlink = require("gulp-symlink");

var config = require("./config/assets.json");

gulp.task("default", function() {
  return gulp.src(config.assets, {base: "node_modules",
    read: false})
    .pipe(symlink(function(file) {
      console.log(file.relative);
      return path.join("public", file.relative);
    }));
});
