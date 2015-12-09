const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserify = require('browserify');
const watchify = require('watchify');
const babelify = require('babelify');
const sass = require('gulp-sass');

function compile(watch) {
	var bundler = watchify(browserify('./src/app/index.js', { debug: true })
			.transform(babelify, {presets: ["es2015", "react"]} ));

	function rebundle() {
		bundler.bundle()
				.on('error', function(err) { console.error(err); this.emit('end'); })
				.pipe(source('build.js'))
				.pipe(buffer())
				.pipe(sourcemaps.init({ loadMaps: true }))
				.pipe(sourcemaps.write('./'))
				.pipe(gulp.dest('./public'));
	}

	if (watch) {
		bundler.on('update', function() {
			console.log('-> bundling...');
			rebundle();
		});
	}

	rebundle();
}

function watch() {
	return compile(true);
};


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

gulp.task('build', function() { return compile(); });
gulp.task('watch', function() { return watch(); });

gulp.task('default', ['watch', 'sass', 'fonts']);


//gulp.task('js', () => {
//	return gulp.src('app/**/*.js')
//			.pipe(sourcemaps.init())
//			.pipe(babel({
//				presets: ['es2015', 'react']
//			}))
//			.pipe(concat('bundle.js'))
//			.pipe(sourcemaps.write('.'))
//			.pipe(gulp.dest('public/js'));
//});

//gulp.task("watch", function() {
//	// calls "build-js" whenever anything changes
//	gulp.watch("public/js/**/*.js", ["js"]);
//	//gulp.watch('sass')
//});
//
//gulp.task('default', ['js', 'sass', 'fonts']);