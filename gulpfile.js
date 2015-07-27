var gulp = require('gulp');
var karma = require('karma').server;

var karmaCommonConf = {
  browsers: ['PhantomJS'],
  frameworks: ['jasmine'],
  files: [
    'lab/**/*.js'
  ]
};

gulp.task('test', function (done) {
  karma.start(karmaCommonConf, function () {});
});

gulp.task('default', ['test']);