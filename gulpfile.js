"use strict";

var gulp = require('gulp');
var watch = require('gulp-watch');
var jasmine = require('gulp-jasmine');
var jshint = require('gulp-jshint');
var shell = require('gulp-shell');

var phonegap_app_root = 'goclient';
var paths = {
    scripts: [phonegap_app_root+'/www/js/**/*.js'],
    specs: [phonegap_app_root+'/www/spec/**/*.js']
};

gulp.task('default', ['all']);
gulp.task('all', ['lint', 'test']);

gulp.task('lint', function() {
    gulp.src( paths.specs )
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
    gulp.src( paths.scripts )
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});

gulp.task('test', function () {
    return gulp.src( paths.specs )
        .pipe(jasmine());
});

gulp.task('build_phonegap', shell.task([
  'phonegap build android'
], { cwd: phonegap_app_root })
);

gulp.task('install_phonegap', shell.task([
  'phonegap install android'
], { cwd: phonegap_app_root })
);

gulp.task('watch', function() {
    gulp.start('all');
    watch( paths.scripts, function() {
        gulp.start('all');
    });
    watch( paths.specs, function() {
        gulp.start('all');
    });
});

