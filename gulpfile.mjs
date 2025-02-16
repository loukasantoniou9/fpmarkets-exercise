import gulp from "gulp";
import gulpSass from "gulp-sass";
import * as dartSass from "sass";
import cleanCSS from "gulp-clean-css";
import uglify from "gulp-uglify";
import concat from "gulp-concat";
import imagemin from "gulp-imagemin";
import browserSync from "browser-sync";

const sass = gulpSass(dartSass);
const bs = browserSync.create();

export function styles() {
  return gulp
    .src("src/scss/styles.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest("dist/css"))
    .pipe(bs.stream());
}

export function scripts() {
  return gulp
    .src("src/js/*.js")
    .pipe(concat("script.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"))
    .pipe(bs.stream());
}

export function images() {
  return gulp
    .src("src/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/images"));
}

export function serve() {
  bs.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("src/scss/**/*.scss", styles);
  gulp.watch("src/js/**/*.js", scripts);
  gulp.watch("*.html").on("change", bs.reload);
}

export default gulp.parallel(styles, scripts, images, serve);
