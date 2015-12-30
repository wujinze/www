var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemap = require('gulp-sourcemaps');

var baseUrl = __dirname + '/../';

var spmui = {
    src: baseUrl + 'platform/_src/spmui/sass/spmui.scss',
    dest: baseUrl + 'platform/css/',
    maps: baseUrl + 'platform/maps/css/'
};

gulp.task('compileSpmui',function(){
    gulp.src(spmui.src)
        .pipe(sourcemap.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemap.write(spmui.maps))
        .pipe(gulp.dest(spmui.dest));
});
