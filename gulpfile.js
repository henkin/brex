const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const sass = require('gulp-sass');

var config = {
	bootstrapDir: 'bower_components/bootstrap-sass',
	publicDir: 'public',
};

gulp.task('sass', function() {
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

gulp.task('js', () => {
	return gulp.src('app/**/*.js')
			.pipe(sourcemaps.init())
			.pipe(babel({
				presets: ['es2015', 'react']
			}))
			.pipe(concat('bundle.js'))
			.pipe(sourcemaps.write('.'))
			.pipe(gulp.dest('public/js'));
});

gulp.task("watch", function() {
	// calls "build-js" whenever anything changes
	gulp.watch("public/js/**/*.js", ["js"]);
	//gulp.watch('sass')
});

gulp.task('default', ['js', 'sass', 'fonts']);