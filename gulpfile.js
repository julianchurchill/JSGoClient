"use strict";

var gulp = require('gulp');
var watch = require('gulp-watch');
var jasmine = require('gulp-jasmine');

var phonegap_app_root = 'goclient';

var paths = {
    scripts: [phonegap_app_root+'/www/js/**/*.js'],
    specs: [phonegap_app_root+'/www/spec/**/*.js']
};

gulp.task('test', function () {
    return gulp.src( paths.specs )
        .pipe(jasmine());
});

gulp.task('watch', function() {
    gulp.start('test');
    watch( paths.scripts, function() {
        gulp.start('test');
    });
    watch( paths.specs, function() {
        gulp.start('test');
    });
});

gulp.task('default', ['test']);

