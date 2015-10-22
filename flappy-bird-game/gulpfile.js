var gulp = require('gulp');

var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var minifyHTML = require('gulp-minify-html');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

// Lint js
gulp.task('jshint', function() {
	return gulp.src('./js/**/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

// Bundle js files and remove whitespace
gulp.task('scripts', function() {
	return browserify('js/main.js')
	.bundle()
	.pipe(source('bundle.js')) // gives streaming vinyl file object
    .pipe(buffer())
	.pipe(uglify())
	.pipe(gulp.dest('build/js'));
});


// Concat and minify all scss files 
gulp.task('styles', function(){
	return gulp.src('./scss/*.scss')
	.pipe(sass())
	.pipe(concat('styles.css'))
	.pipe(minifyCss())
	.pipe(gulp.dest('build/css'));
});

// Image optimization 
gulp.task('images', function(){
	return gulp.src('img/*')
	.pipe(imagemin())
	.pipe(gulp.dest('build/img'));
});

// Minify html
gulp.task('html', function(){
	return gulp.src('index.html')
	.pipe(minifyHTML())
	.pipe(gulp.dest('build/'));
});

// Watch for files changes
gulp.task('watch', ['build'], function(){
	gulp.watch('index.html', ['build'] );
  	gulp.watch('js/**/*.js', ['build']);
  	gulp.watch('scss/*.scss', ['build']);
  	gulp.watch('img/*', ['images']);
});

// Build task
gulp.task('build', ['jshint', 'styles', 'scripts', 'images', 'html']);