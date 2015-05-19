var gulp = require('gulp'),
    qunit = require('gulp-qunit'),
    concat = require('gulp-concat');

gulp.task('scripts', function() {
  return gulp.src('./js/src/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./js/'));
});

gulp.task('test-scripts', function() {
  return gulp.src('./tests/*.js')
    .pipe(concat('tests.js'))
    .pipe(gulp.dest('./tests/'));
});

gulp.task('tests', function() {
    return gulp.src('./tests/test.html')
        .pipe(qunit());
});

gulp.task('watch', function() {
  gulp.watch(['js/src/*.js'], ['scripts', 'test-scripts','tests']);
});


gulp.task('default', ['watch', 'scripts', 'test-scripts', 'tests']);
