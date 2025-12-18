var gulp = require('gulp');
var inlinesource = require('gulp-inline-source');

gulp.task('inlinesource', function () {
    return gulp.src('./coverage/*.html')
        .pipe(inlinesource({attribute: false}))
        .pipe(gulp.dest('./coverage/report'));
});

// This function was improved with the help of GitHub Copilot suggestions
