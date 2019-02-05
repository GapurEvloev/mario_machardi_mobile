module.exports = function() {
  $.gulp.task('img:dev', function() {
    return $.gulp.src('./src/static/img/**/*.{png,jpg,gif,webp}')
      .pipe($.gulp.dest('./dist/static/i/'));
  });

  $.gulp.task('img:build', function() {
    return $.gulp.src('./src/static/img/**/*.{png,jpg,gif,webp}')
      .pipe($.gulp.dest('./dist/static/i/'));
  });

  $.gulp.task('svg:copy', function() {
    return $.gulp.src('./src/static/img/general/**/*.svg')
      .pipe($.gulp.dest('./dist/static/i/general/'));
  });
};