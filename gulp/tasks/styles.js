module.exports = function() {
  $.gulp.task('styles:dev', function() {
    return $.gulp.src('./src/static/styles/main.styl')
      .pipe($.glp.sourcemaps.init())
      .pipe($.glp.stylus())
      .on('error', $.glp.notify.onError(function (error) {
        return {
          title: 'Stylus',
          message: error.message
        };
      }))
      .pipe($.glp.sourcemaps.write())
      .pipe($.glp.autoprefixer())
      .pipe($.gulp.dest('./dist/static/css/'))
      .pipe($.browserSync.reload({
        stream: true
      }));
  });

  $.gulp.task('styles:build', function() {
    return $.gulp.src('./src/static/styles/main.styl')
      .pipe($.glp.stylus())
      .pipe($.glp.autoprefixer())
      .pipe($.gcmq())
      .pipe($.gulp.dest('./dist/static/css/'))
      .pipe($.glp.cssnano())
      .pipe($.glp.rename('main.min.css'))
      .pipe($.gulp.dest('./dist/static/css/'))
  });
};