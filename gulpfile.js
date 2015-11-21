var del  = require("del");
var gulp = require("gulp");
var path = require("path");
var debug = require("gulp-debug");
var symlink = require("gulp-symlink");

var config = require("./config/assets.json");

gulp.task("clean:staging", function() {
  return del(config.assets, {cwd: "public"});
});

gulp.task("staging", function() {
  return gulp.src(config.assets, {cwd: "node_modules",
    read: false})
    .pipe(symlink(function(file) {
      return path.join("public", file.relative);
    }));
});

gulp.task("default", ["staging"]);
