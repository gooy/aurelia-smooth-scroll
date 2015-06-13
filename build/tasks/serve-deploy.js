var gulp = require('gulp');
var gls = require('gulp-live-server');
var dirs = gulp.pkg.directories;

/**
 * Serve the deploy directory for deploy testing
 */
gulp.task('serve-deploy', function() {
  var server = gls.static(dirs.deploy);
  server.start();
});
