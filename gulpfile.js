/*
*
*			Barebones gulpfile.  Only has browserSync.  Make sure to change the directories!

            v2.0:  now has postCSS!
                -autoprefixer
                -variables
                -nesting

            v2.1:  -cssInject
                    -inline comment stripper
                
*
*/


var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var postCSS_InlineComment = require('postcss-inline-comment');



gulp.task('styles', function() {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([postCSS_InlineComment, cssvars, nested, autoprefixer]))
        .on('error', function(errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));
});


//dependencies inside the []!!!! - completes the tasks inside the bracket first before doing the cssInject!
gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream());
});

 
//this uses the gulp-watch plugin - *****baseDir should point to where index.html lives!!!
gulp.task('watch', function() {

    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });

    

    watch('./app/index.html', function() {
        browserSync.reload();
    });

    watch('./app/assets/scripts/*', function() {
        browserSync.reload();
    });

    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('cssInject');
        // gulp.start('styles');
        // browserSync.reload();
    });



    

});



