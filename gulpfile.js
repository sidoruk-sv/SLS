var gulp = require('gulp'),
    qunit = require('node-qunit-phantomjs'),
    concat = require('gulp-concat'),
    del = require('del');

gulp.task('js-scripts', ['clean-js'], function() {
  return gulp.src('./js/src/**/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./js/'));
});
gulp.task('clean-js', function(cb) {
  del(['js/all.js'], cb);
});

gulp.task('test-scripts', ['clean-tests'], function() {
  return gulp.src('./tests/**/*.js')
    .pipe(concat('tests.js'))
    .pipe(gulp.dest('./tests/'));
});
gulp.task('clean-tests', function(cb) {
  del(['tests/tests.js'], cb);
});

gulp.task('qunit', function() {
    qunit('test.html', { 'verbose': true });
});

gulp.task('watch', function() {
  gulp.watch(['js/src/*.js'], ['js-scripts', 'test-scripts', 'qunit']);
});


gulp.task('default', ['watch', 'js-scripts', 'test-scripts', 'qunit']);
