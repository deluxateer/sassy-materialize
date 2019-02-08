const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

let jsFiles = [
  'js/cash.js',
  'js/component.js',
  'js/global.js',
  'js/anime.min.js',
  'js/collapsible.js',
  'js/dropdown.js',
  'js/modal.js',
  'js/materialbox.js',
  'js/parallax.js',
  'js/tabs.js',
  'js/tooltip.js',
  'js/waves.js',
  'js/toasts.js',
  'js/sidenav.js',
  'js/scrollspy.js',
  'js/autocomplete.js',
  'js/forms.js',
  'js/slider.js',
  'js/cards.js',
  'js/chips.js',
  'js/pushpin.js',
  'js/buttons.js',
  'js/datepicker.js',
  'js/timepicker.js',
  'js/characterCounter.js',
  'js/carousel.js',
  'js/tapTarget.js',
  'js/select.js',
  'js/range.js'
];

jsFiles = jsFiles.map(file => `src/${file}`);

// Compile Scss Files
function scss() {
  return (
    gulp.src(['src/sass/*.scss'])
      .pipe(sourcemaps.init({ loadMaps: true, largeFile: true }))
      .pipe(sass({
        outputStyle: 'compressed'
      }).on('error', sass.logError))
      .pipe(autoprefixer({
        browsers: [
          'last 2 versions',
          'Chrome >= 30',
          'Firefox >= 30',
          'ie >= 10',
          'Safari >= 8'
        ]
      }))
      .pipe(rename("materialize.min.css"))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('dist/css/'))
  );
}

// Concatenate JS Files
function js() {
  return (
    gulp.src(jsFiles)
      .pipe(sourcemaps.init())
      .pipe(babel())
      .pipe(concat('materialize.min.js'))
      .pipe(uglify())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('dist/js/'))
  );
}

// Watch
function watch() {
  browserSync.init({
    server: 'dist',
    open: 'external',
    port: 9000
  });
  gulp.watch('src/sass/**/*.scss', scss);
  gulp.watch('src/js/*.js', js);
  gulp.watch(['dist/css/*', 'dist/js/*', 'dist/*.html']).on('change', browserSync.reload);
}

exports.scss = scss;
exports.js = js;
exports.watch = watch;

let build = gulp.series(gulp.parallel(scss, js), watch);

exports.default = build;