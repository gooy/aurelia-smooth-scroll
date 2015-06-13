var gulp = require('gulp');
var runSequence = require('run-sequence');
var fs = require('fs');
var bump = require('gulp-bump');
var args = require('../args');

/**
 * Utilizes the bump plugin to bump the semver for the repo
 */
gulp.task('bump-version', function(){
  return gulp.src(['package.json'])
    .pipe(bump({type:args.bump })) //major|minor|patch|prerelease
    .pipe(gulp.dest('./'));
});
