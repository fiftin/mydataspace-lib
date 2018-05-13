var gulp = require('gulp');
var bower = require('gulp-bower');
var runSequence = require('run-sequence');
var del = require('del');
var concat = require('gulp-concat');


gulp.task('bower', function() {
  return bower();
});

gulp.task('vendor:bootstrap:css', function() {
  return gulp.src(
    'bower_components/bootstrap-sass/assets/stylesheets/**/*'
  ).pipe(gulp.dest('scss/bootstrap'));
});

gulp.task('vendor:bootstrap', ['vendor:bootstrap:css']);

gulp.task('vendor:clean', function() {
  return del(['vendor/**/*']);
});

gulp.task('default', function() {
  runSequence(
    'bower',
    'vendor:clean',
    [
      'vendor:bootstrap'
    ]);
});