var gulp = require("gulp");
var jshint = require("gulp-jshint");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var insert = require("gulp-insert");
var replace = require("gulp-replace-task");

var pkg = require("./package");
var src = [
  "src/e2d.js",
  "src/Scene.js",
  "src/Vector2.js",
  "src/generators/generateId.js",
  "src/object/addObject.js",
  "src/object/destroyObject.js",
  "src/object/enableObject.js",
  "src/object/disableObject.js"
];

var header = "/**\n" +
" * E2D Engine v" + pkg.version + "\n" +
" * @author Jack Dalton <jack@jackdalton.org>\n" +
" * Copyright © 2015 Jack Dalton under the MIT license (https://opensource.org/licenses/MIT)\n **/\n\n";

var footer = "\ntypeof module !== \"undefined\" ? module.exports = E2D : window.E2D = E2D;"

gulp.task("lint", function() {
  return gulp.src(src)
    .pipe(jshint())
    .pipe(jshint.reporter("default"));
});
gulp.task("build", function() {
  return gulp.src(src)
    .pipe(replace({
      patterns: [
        {
          match: new RegExp("%VERSION%"),
          replacement: pkg.version
        }
      ]
    }))
    .pipe(concat("e2d.js"))
    .pipe(insert.prepend(header))
    .pipe(insert.append(footer))
    .pipe(gulp.dest("dist"))
    .pipe(rename("e2d.min.js"))
    .pipe(insert.prepend(footer))
    .pipe(uglify())
    .on("error", function(e){throw new Error(e)})
    .pipe(insert.prepend(header))
    .pipe(gulp.dest("dist"));
});
gulp.task("watch", function() {
  gulp.watch("src/*.js", ["lint", "build"]);
});
gulp.task("default", ["lint", "build", "watch"]);
