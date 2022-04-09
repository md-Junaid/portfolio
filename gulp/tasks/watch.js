const { src, dest, watch, series } = require('gulp');
// const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();

function cssTask(){
  return src('./app/assets/styles/**/*.css', { sourcemaps: true })
      .pipe(postcss([cssnano()]))
      .pipe(dest('./app/temp/styles/styles.css', { sourcemaps: '.' }));
}

// JavaScript Task
function jsTask(){
  return src('./app/assets/scripts/**/*.js', { sourcemaps: true })
    .pipe(terser())
    .pipe(dest('./app/temp/scripts/App.js', { sourcemaps: '.' }));
}

function browsersyncServe(cb){
  browsersync.init({
    server: {
      baseDir: 'app'
    }    
  });
  cb();
}

function browsersyncReload(cb){
  browsersync.reload();
  cb();
}
// Watch Task
function watchTask(){
  watch('*.html', browsersyncReload);
  watch(['./app/assets/styles/**/*.css', './app/assets/scripts/**/*.js'], series(cssTask, jsTask, browsersyncReload));
}

// Default Gulp Task
exports.default = series(
  cssTask,
  jsTask,
  browsersyncServe,
  watchTask
);