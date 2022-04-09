var gulp 		= require('gulp'),
	imagemin	= require('gulp-imagemin'),
	del 		= require('del'),
	usemin		= require('gulp-usemin'),
	rev 		= require('gulp-rev'),
	cssnano		= require('gulp-cssnano'),
	uglify		= require('gulp-uglify'),
	browserSync = require('browser-sync').create();

gulp.task('previewDist', function() {
	browserSync.init({
		notify: false,
		server: {
			baseDir: "docs"
		}
	});
});

gulp.task('deleteDistFolder', function() {
	return del("./docs");
});

gulp.task('copyGeneralFiles', gulp.series(gulp.parallel('deleteDistFolder'), function() {
	var pathsToCopy = [
		'./app/**/*',
		'!./app/index.html',
		'!./app/projects.html',
		'!./app/notes.html',
		'!./app/assets/images/**',
		'!./app/assets/styles/**',
		'!./app/assets/scripts/**',
		'!./app/temp',
		'!./app/temp/**'
	]

	return gulp.src(pathsToCopy)
		.pipe(gulp.dest("./docs"));
}));

gulp.task('optimizeImages', gulp.series(gulp.parallel('deleteDistFolder'), function() {
	return gulp.src(['./app/assets/images/**/*'])
		.pipe(imagemin({
			progressive: true,
			interlaced: true,
			multipass: true
		}))
		.pipe(gulp.dest("./docs/assets/images"));
}));

gulp.task('useminTrigger', gulp.series(gulp.parallel('deleteDistFolder', 'styles', 'scripts'), function(done) {
	return gulp.src(["./app/index.html", "./app/projects.html", "./app/notes.html"])
		.pipe(usemin({
			css: [function() {return rev()}, function() {return cssnano()}],
			js: [function() {return rev()}, function() {return uglify()}]
		}))
		.pipe(gulp.dest("./docs"));
}));

gulp.task('build', gulp.series(gulp.parallel('deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'useminTrigger')));