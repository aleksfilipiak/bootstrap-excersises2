var gulp = require('gulp');
var sass = require("gulp-sass")
var jshint = require("gulp-jshint")
var sourcemaps = require("gulp-sourcemaps")

gulp.task('sass', function () {
    return gulp.src("./sass/*.scss") //szuka plicu scss, z którego utworzy plik css

        .pipe(sourcemaps.init())

        .pipe(sass({errLogToConsole: true, sourceMap: true, outputStyle: "expanded"}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'))// do katalogu w którym jest gulpfile (w kropce w środku nawiasów (tworzy folder docelowy ORAZ plik docelowy)

});
gulp.task("hint", function () {
    return gulp.src("main.js")
        .pipe(jshint())
        .pipe(jshint.reporter('default'))

});

gulp.task("watch", function () {
    gulp.watch("**/sass/**/*.scss", ["sass"])
});




