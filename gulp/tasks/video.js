module.exports = function() {
  $.gulp.task('video:copy', function() {
    return $.gulp.src('./src/static/video/**/*.*')
      .pipe($.gulp.dest('./dist/static/video/'));
  });
};