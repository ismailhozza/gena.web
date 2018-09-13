const gulp = require("gulp");
const minify = require("gulp-minify");

gulp.task("default", function () {
    gulp.src("./public/**/*.*")
        .pipe(gulp.dest("./dist/"));
});
