'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	plumber = require('gulp-plumber'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	csso = require('gulp-csso'),
	rename = require('gulp-rename'),
	imagemin = require('gulp-imagemin'),
	uglify = require('gulp-uglify'),
	pump = require('pump'),
	svgo = require('gulp-svgo'),
	concat = require('gulp-concat'),
	svgSymbols = require('gulp-svg-symbols'),
	rsp = require('remove-svg-properties').stream;

	gulp.task('sass', function () {
		return gulp.src('scss/style.scss')

		.pipe(plumber())
		.pipe(sass())
		.pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))


		.pipe(gulp.dest('css'))
		.pipe(csso())
		.pipe(rename('style.min.css'))
		.pipe(gulp.dest('css'))
		.pipe(server.stream());
	});


	gulp.task('concat', function() {
		return gulp.src(['js/jquery.easypiechart.min.js','js/typed.min.js','js/wow.min.js'])

		.pipe(concat('lib.min.js'))
		.pipe(gulp.dest('js'));
	});


	gulp.task('js', function () {
		return gulp.src('js/custom.js')

		.pipe(plumber())
		.pipe(uglify())
		.pipe(rename('min.custom.js'))
		.pipe(gulp.dest('js'))
		.pipe(server.stream());
	});



	gulp.task('serve', ['sass'], function () {
		server.init({
			server: "."
		});

		gulp.watch('scss/**/*.scss', ['sass']);
		gulp.watch('js/custom.js', ['js']);
		gulp.watch('*.html').on('change', server.reload);
	});


	gulp.task('images', function () {
		return gulp.src('img/**/*.{png,jpg,gif}')

		.pipe(imagemin([
			imagemin.optipng({optimizationLevel: 3}), 
			imagemin.jpegtran({progressive: true})
			]))

		.pipe(gulp.dest('img'));
	});

	gulp.task('sprites', function () {
		return gulp.src('svg/*.svg')
		.pipe(svgo())
		.pipe(svgSymbols())
		.pipe(gulp.dest("svg"));
	});