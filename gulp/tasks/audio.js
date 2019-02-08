module.exports = function() {
  $.gulp.task('audio:copy', function() {
    return $.gulp.src('./src/static/audio/**/*.*')
      .pipe($.gulp.dest('./dist/static/audio/'));
  });
};