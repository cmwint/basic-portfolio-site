/*------------------------------------*\
    ::Plugins
\*------------------------------------*/
// initial
var gulp = require('gulp');

// Requires the gulp-sass plugin
var sass = require('gulp-sass');

var browserSync = require('browser-sync').create();


/*------------------------------------*\
    ::Task Definitions
\*------------------------------------*/

//css
gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// browser sync
gulp.task('browserSync', function() {
    var url = 'http://localhost/sites/site/app';
    browserSync.init({
        proxy: url
    })
})

// concatenation
gulp.task('useref', function(){
    var useref = require('gulp-useref');
    // uglify
    var uglify = require('gulp-uglify');
    var gulpIf = require('gulp-if');

    return gulp.src('app/*.php')
        .pipe(useref())
        // Minifies only if it's a JavaScript file
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulp.dest('dist'))
});




// watch
gulp.task('watch', ['browserSync', 'sass'], function (){
    gulp.watch('app/scss/**/*.scss', ['sass']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});