var gulp = require('gulp');
var runSequence = require('run-sequence');
var del = require('del');
var concat = require('gulp-concat');


gulp.task('vendor:bootstrap:css', function() {
  return gulp.src(
    'node_modules/bootstrap-sass/assets/stylesheets/**/*'
  ).pipe(gulp.dest('scss/bootstrap'));
});

gulp.task('vendor:bootstrap', ['vendor:bootstrap:css']);

gulp.task('vendor:clean', function() {
  return del(['scss/**/*']);
});

gulp.task('default', function() {
  runSequence(
    'vendor:clean',
    [
      'vendor:bootstrap'
    ]);
});
