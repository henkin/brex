const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const sass = require('gulp-sass');

var config = {
	bootstrapDir: 'bower_components/bootstrap-sass',
	publicDir: 'public',
};

gulp.task('css', function() {
	return gulp.src('src/styles/main.scss')
			.pipe(sass({
				includePaths: [config.bootstrapDir + '/assets/stylesheets'],
			}).on('error', sass.logError))
			.pipe(gulp.dest(config.publicDir + '/stylesheets'));
});

gulp.task('fonts', function() {
	return gulp.src(config.bootstrapDir + '/assets/fonts/**/*')
			.pipe(gulp.dest(config.publicDir + '/fonts'));
});

gulp.task('sass', function(){
	return gulp.src('src/styles/main.scss')
			.pipe(sass().on('error', sass.logError))
			.pipe(gulp.dest('public/stylesheets'))
});

gulp.task('default', ['css', 'fonts']);