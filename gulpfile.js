var gulp = require('gulp');
var watchLess = require('gulp-watch-less');
var less = require('gulp-less');



gulp.task('default', function () {
	return gulp.src('styles/**/*.less')
		.pipe(watchLess('styles/**/*.less'))
		.pipe(less())
		.pipe(gulp.dest('dist'));
});