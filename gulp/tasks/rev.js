var config       = require('../config');
var gulp         = require('gulp');
var rev          = require('gulp-rev');
var revCollector = require('gulp-rev-collector');

// Add md5 hashes to assets
gulp.task('rev-assets', function(){
  return gulp.src(config.publicAssets + '/**/!(*.{css,js})')
    .pipe(rev())
    .pipe(gulp.dest(config.publicAssets))
    .pipe(rev.manifest())
    .pipe(gulp.dest(config.publicAssets));
});

// Replace asset references in compiled css and js files
gulp.task('rev', ['rev-assets'], function(){
  return gulp.src([config.publicAssets + '/rev-manifest.json', config.publicAssets + '/**/*.{css,js}'])
    .pipe(revCollector())
    .pipe(gulp.dest(config.publicAssets));
});
