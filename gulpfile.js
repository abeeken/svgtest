var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var pug = require('gulp-pug');
var concat = require('gulp-concat');
var jsnano = require('gulp-minify');

var jsfiles = 'js/**/*';

gulp.task('sass', function(){
    return gulp.src('sass/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/css'))
});

gulp.task('minicss', function(){
    return gulp.src('public/css/style.css')
        .pipe(cssnano())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./public/css'))
});

gulp.task('views', function(){
    return gulp.src('views/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('./public'))
});

gulp.task('minijs', function(){
    return gulp.src(jsfiles)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./public/js'))
        .pipe(jsnano())
        .pipe(gulp.dest('./public/js'))
});

gulp.task('watch', function(){
    gulp.watch('sass/*.scss', gulp.series('sass','minicss'));
    gulp.watch('views/**/*.pug', gulp.series('views'));
    gulp.watch('js/*.js', gulp.series('minijs'));
 });