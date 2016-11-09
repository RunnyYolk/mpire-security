var gulp = require('gulp'),
    browserSync = require('browser-sync');

    gulp.task('browserSync', function(){
      browserSync.init({
        server: {
          baseDir: 'project',
          index: 'mpire.html'
        }
      })
    })

    gulp.task('watch', ['browserSync'], function(){
      gulp.watch('mpire.html', browserSync.reload);
      gulp.watch('stylesheets/*.css', browserSync.reload);
      gulp.watch('javascript/*.js', browserSync.reload);
    })
