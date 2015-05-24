var gulp = require('gulp');
var watchLess = require('gulp-watch-less');
var less = require('gulp-less');
var csscomb = require('gulp-csscomb');


gulp.task('default', function () {
	return gulp.src('styles/**/*.less')
		.pipe(watchLess('styles/**/*.less'))
		.pipe(less())
		.pipe(gulp.dest('dist'));
});



gulp.task('csscomb', function () {
	return gulp.src('styles/**/*.css')
		.pipe(csscomb())
		.pipe(gulp.dest('styles'));
});