var gulp = require('gulp');
var gulpSequence = require('gulp-sequence')

gulp.task('build', gulpSequence('clean',['iconFont', 'images'], ['sass', 'browserify']));
