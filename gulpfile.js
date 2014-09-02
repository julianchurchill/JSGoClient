"use strict";

var gulp = require('gulp');
var jasmine = require('gulp-jasmine');

var phonegap_app_root = 'goclient';
var app_spec_dir = phonegap_app_root + '/www/spec';

gulp.task('test', function () {
    return gulp.src(app_spec_dir+'/*.js')
        .pipe(jasmine());
});

gulp.task('default', ['test']);

